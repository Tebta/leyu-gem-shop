import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#8B612E] mb-4">Elegance</h3>
            <p className="text-gray-300 mb-4">
              Crafting timeless jewelry pieces that celebrate life's most precious moments.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#8B612E] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8B612E] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8B612E] transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8B612E] transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/products?category=necklaces" className="hover:text-[#8B612E] transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/products?category=rings" className="hover:text-[#8B612E] transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/products?category=earrings" className="hover:text-[#8B612E] transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/products?category=bracelets" className="hover:text-[#8B612E] transition-colors">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link href="/products?category=watches" className="hover:text-[#8B612E] transition-colors">
                  Watches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/custom-orders" className="hover:text-[#8B612E] transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Repairs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Appraisals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/contact" className="hover:text-[#8B612E] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8B612E] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elegance Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
