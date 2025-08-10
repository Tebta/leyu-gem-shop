import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FavoritesProvider } from "@/components/favorites-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Liyu Jewelry - Timeless Luxury",
  description: "Discover our exquisite collection of handcrafted jewelry",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FavoritesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  )
}
