"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Star, ShoppingBag, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { useFavorites } from "@/components/favorites-provider"

const products = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    price: 2499,
    originalPrice: 2999,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    video: "/placeholder.mp4?query=diamond ring video",
    category: "rings",
    rating: 4.9,
    reviews: 124,
    material: "18K White Gold",
    description:
      "This stunning diamond eternity ring features brilliant-cut diamonds set in 18K white gold. Perfect for engagements, anniversaries, or as a symbol of eternal love.",
    features: [
      "18K White Gold Band",
      "1.5 Carat Total Diamond Weight",
      "Brilliant Cut Diamonds",
      "Comfort Fit Design",
      "Lifetime Warranty",
    ],
    specifications: {
      Metal: "18K White Gold",
      Stone: "Diamond",
      "Carat Weight": "1.5 CT",
      "Ring Size": "Available in sizes 4-10",
      Width: "3mm",
    },
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = products.find((p) => p.id === productId)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const toggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            {selectedImage === 0 && product.video ? (
              <video className="w-full h-full object-cover" controls autoPlay muted loop>
                <source src={product.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => setSelectedImage(0)}
              className={`aspect-square rounded-lg overflow-hidden border-2 ${
                selectedImage === 0 ? "border-[#8B612E]" : "border-gray-200"
              }`}
            >
              <video className="w-full h-full object-cover" muted>
                <source src={product.video} type="video/mp4" />
              </video>
            </button>
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-[#8B612E]" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-[#8B612E]">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  <Badge className="bg-red-500">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </>
              )}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-3">Ring Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {[4, 5, 6, 7, 8, 9, 10].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size.toString())}
                  className={`py-2 px-3 border rounded-lg text-center ${
                    selectedSize === size.toString()
                      ? "border-[#8B612E] bg-[#8B612E] text-white"
                      : "border-gray-300 hover:border-[#8B612E]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#8B612E]"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:border-[#8B612E]"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button size="lg" className="flex-1 bg-[#8B612E] hover:bg-[#8B612E]/90">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={toggleFavorite}
              className={isFavorite(product.id) ? "text-red-500 border-red-500" : ""}
            >
              <Heart className={`h-5 w-5 ${isFavorite(product.id) ? "fill-current" : ""}`} />
            </Button>
            <Button size="lg" variant="outline">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 py-6 border-t border-b">
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-[#8B612E]" />
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-gray-600">On orders over $500</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-[#8B612E]" />
              <p className="text-sm font-medium">Lifetime Warranty</p>
              <p className="text-xs text-gray-600">Against manufacturing defects</p>
            </div>
            <div className="text-center">
              <RotateCcw className="h-8 w-8 mx-auto mb-2 text-[#8B612E]" />
              <p className="text-sm font-medium">30-Day Returns</p>
              <p className="text-xs text-gray-600">Hassle-free returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#8B612E] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Based on {product.reviews} reviews</p>
                </div>
              </div>
              {/* Sample reviews would go here */}
              <div className="text-center py-8 text-gray-500">Reviews coming soon...</div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
