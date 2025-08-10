"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingBag, Star, Clock } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    price: 2499,
    originalPrice: 2999,
    image: "/neck.jpg",
    category: "rings",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    name: "Pearl Necklace Set",
    price: 899,
    originalPrice: 1199,
    image: "/neck3.jpg",
    category: "necklaces",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: "Gold Drop Earrings",
    price: 649,
    originalPrice: 799,
    image: "/neck1.jpg",
    category: "earrings",
    rating: 4.7,
    reviews: 156,
  },
]

const categories = [
  { name: "Necklaces", image: "/neck1.jpg", href: "/products?category=necklaces" },
  { name: "Rings", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=100&w=2580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/products?category=rings" },
  { name: "Earrings", image: "https://plus.unsplash.com/premium_photo-1681276170291-27698ccc0a8e?q=100&w=1387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/products?category=earrings" },
  { name: "Bracelets", image: "https://images.unsplash.com/photo-1646031348619-13cb7d714c87?q=100&w=2870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/products?category=bracelets" },
  // { name: "Watches", image: "/neck.jpg", href: "/products?category=watches" },
  { name: "Custom", image: "/neck.jpg", href: "/custom-orders" },
]

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        <Image
          src="/neck.jpg"
          alt="Luxury Jewelry"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Timeless
            <span className="block text-[#8B612E]">Liyu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover our exquisite collection of handcrafted jewelry, where every piece tells a story of luxury and
            sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#8B612E] hover:bg-[#8B612E]/90 text-white px-8 py-3 text-lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
            >
              Custom Orders
            </Button>
          </div>
        </div>
      </section>

      {/* Discount Countdown */}
      <section className="bg-[#8B612E] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Clock className="mr-2 h-6 w-6" />
            <h2 className="text-2xl font-bold">Limited Time Offer - 20% OFF</h2>
          </div>
          <div className="flex justify-center gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-3 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 min-w-[80px]">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="group">
                <div className="relative overflow-hidden rounded-lg  transition-shadow">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="w-full rounded-full h-56 object-cover  group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="outline" className="absolute top-4 right-4 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-red-500">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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
                      <span className="text-2xl font-bold text-[#8B612E]">ETB {product.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">ETB {product.originalPrice}</span>
                    </div>
                    <Link href={`/products/${product.id}`}>
                      <Button className="bg-[#8B612E] hover:bg-[#8B612E]/90">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-[#8B612E] text-[#8B612E] hover:bg-[#8B612E] hover:text-white bg-transparent"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Crafted with Passion</h2>
              <p className="text-lg text-gray-300 mb-6">
                For over three decades, we have been creating exceptional jewelry pieces that celebrate life's most
                precious moments. Each piece is meticulously handcrafted by our master artisans using the finest
                materials and traditional techniques.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From engagement rings to custom designs, we bring your vision to life with uncompromising quality and
                attention to detail.
              </p>
              <Link href="/custom-orders">
                <Button size="lg" className="bg-[#8B612E] hover:bg-[#8B612E]/90">
                  Start Custom Order
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/neck2.jpg"
                alt="Jewelry Craftsman"
                width={600}
                height={300}
                className="rounded-lg h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
