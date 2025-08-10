"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { useFavorites } from "@/components/favorites-provider"
import { useRouter } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { favorites } = useFavorites()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img onClick={()=> router.push('/')} className='w-16 cursor-pointer' src='/logo.jpg'/>
          {/* <Link href="/" className="text-2xl font-bold text-[#8B612E]">
            Liyu
          </Link> */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-[#8B612E] transition-colors">
              Products
            </Link>
            <Link href="/products?category=necklaces" className="text-gray-700 hover:text-[#8B612E] transition-colors">
              Necklaces
            </Link>
            <Link href="/products?category=rings" className="text-gray-700 hover:text-[#8B612E] transition-colors">
              Rings
            </Link>
            <Link href="/products?category=earrings" className="text-gray-700 hover:text-[#8B612E] transition-colors">
              Earrings
            </Link>
            <Link href="/custom-orders" className="text-gray-700 hover:text-[#8B612E] transition-colors">
              Custom Orders
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#8B612E] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
            <Link href="/favorites">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-[#8B612E]">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="sm">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-700 hover:text-[#8B612E] transition-colors">
                Products
              </Link>
              <Link
                href="/products?category=necklaces"
                className="text-gray-700 hover:text-[#8B612E] transition-colors"
              >
                Necklaces
              </Link>
              <Link href="/products?category=rings" className="text-gray-700 hover:text-[#8B612E] transition-colors">
                Rings
              </Link>
              <Link href="/products?category=earrings" className="text-gray-700 hover:text-[#8B612E] transition-colors">
                Earrings
              </Link>
              <Link href="/custom-orders" className="text-gray-700 hover:text-[#8B612E] transition-colors">
                Custom Orders
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#8B612E] transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
