"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Star, ShoppingBag } from "lucide-react"
import { useFavorites } from "@/components/favorites-provider"

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Heart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Favorites</h1>
        <p className="text-gray-600 mb-8">You haven't added any items to your favorites yet.</p>
        <Link href="/products">
          <Button className="bg-[#8B612E] hover:bg-[#8B612E]/90">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Now
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Favorites</h1>
        <p className="text-gray-600">{favorites.length} items in your favorites</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((product) => (
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
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-red-500"
                onClick={() => removeFromFavorites(product.id)}
              >
                <Heart className="h-4 w-4 fill-current" />
              </Button>
              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </div>
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
                  <span className="text-xl font-bold text-[#8B612E]">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
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
  )
}
