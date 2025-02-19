"use client"

import Link from "next/link"
import { ShoppingCart, Search, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold text-pink-800">
            Wool & Lens Vietnam
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-pink-600 transition duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-600 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-600 transition duration-300">
              <Search size={24} />
            </button>
            <Link href="/cart" className="text-gray-600 hover:text-pink-600 transition duration-300">
              <ShoppingCart size={24} />
            </Link>
            <button
              className="md:hidden text-gray-600 hover:text-pink-600 transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-pink-600 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-600 hover:text-pink-600 transition duration-300">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-pink-600 transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

