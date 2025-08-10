"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Star, Filter } from "lucide-react"
import { useFavorites } from "@/components/favorites-provider"

const products = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    price: 2499,
    originalPrice: 2999,
    image: "/neck.jpg",
    category: "rings",
    rating: 4.9,
    reviews: 124,
    material: "gold",
  },
  {
    id: 2,
    name: "Pearl Necklace Set",
    price: 899,
    originalPrice: 1199,
    image: "/neck1.jpg",
    category: "necklaces",
    rating: 4.8,
    reviews: 89,
    material: "silver",
  },
  {
    id: 3,
    name: "Gold Drop Earrings",
    price: 649,
    originalPrice: 799,
    image: "/neck3.jpg",
    category: "earrings",
    rating: 4.7,
    reviews: 156,
    material: "gold",
  },
  {
    id: 4,
    name: "Silver Tennis Bracelet",
    price: 1299,
    image: "/neck2.jpg",
    category: "bracelets",
    rating: 4.6,
    reviews: 78,
    material: "silver",
  },
  {
    id: 5,
    name: "Luxury Watch",
    price: 3999,
    originalPrice: 4999,
    image: "/neck.jpg",
    category: "watches",
    rating: 4.9,
    reviews: 203,
    material: "gold",
  },
  {
    id: 6,
    name: "Sapphire Pendant",
    price: 1899,
    image: "/neck1.jpg",
    category: "necklaces",
    rating: 4.8,
    reviews: 92,
    material: "platinum",
  },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || ""

  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategory ? [initialCategory] : [])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [sortBy, setSortBy] = useState("featured")
  const [showFilters, setShowFilters] = useState(false)

  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
          return false
        }
        if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) {
          return false
        }
        if (product.price < priceRange[0] || product.price > priceRange[1]) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          case "newest":
            return b.id - a.id
          default:
            return 0
        }
      })
  }, [selectedCategories, selectedMaterials, priceRange, sortBy])

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category])
    } else {
      setSelectedCategories((prev) => prev.filter((c) => c !== category))
    }
  }

  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials((prev) => [...prev, material])
    } else {
      setSelectedMaterials((prev) => prev.filter((m) => m !== material))
    }
  }

  const toggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Our Collection</h1>
          <p className="text-gray-600 mt-2">{filteredProducts.length} products found</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:block ${showFilters ? "block" : "hidden"} space-y-6`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-3">
              {["necklaces", "rings", "earrings", "bracelets", "watches"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={category} className="capitalize cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-4">Material</h3>
            <div className="space-y-3">
              {["gold", "silver", "platinum"].map((material) => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={material}
                    checked={selectedMaterials.includes(material)}
                    onCheckedChange={(checked) => handleMaterialChange(material, checked as boolean)}
                  />
                  <Label htmlFor={material} className="capitalize cursor-pointer">
                    {material}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold mb-4">Price Range</h3>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={5000}
                min={0}
                step={100}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>ETB{priceRange[0]}</span>
                <span>ETB{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    className={`absolute top-4 right-4 bg-white/90 hover:bg-white ${
                      isFavorite(product.id) ? "text-red-500" : ""
                    }`}
                    onClick={() => toggleFavorite(product)}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite(product.id) ? "fill-current" : ""}`} />
                  </Button>
                  {product.originalPrice && (
                    <Badge className="absolute top-4 left-4 bg-red-500">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-[#8B612E]">ETB {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">ETB {product.originalPrice}</span>
                      )}
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <Button size="sm" className="bg-[#8B612E] hover:bg-[#8B612E]/90">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
