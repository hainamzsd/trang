"use client"

import { forwardRef, useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X } from "lucide-react"
import { useCart } from "./cart-context"

const Header = forwardRef<HTMLAnchorElement>(function Header(_, ref) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold text-pink-800 hover:text-pink-700 transition-colors">
            Wool Forest
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/products" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="relative text-gray-700 hover:text-pink-700 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-700 hover:after:w-full after:transition-all after:duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <button aria-label="Search" className="text-gray-700 hover:text-pink-700">
              <Search size={24} />
            </button>
            
            <Link 
              href="/cart" 
              ref={ref}
              className="relative text-gray-700 hover:text-pink-700"
              aria-label="Cart"
            >
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            <button 
              aria-label="Menu"
              className="md:hidden text-gray-700 hover:text-pink-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 animate-slideDown">
            <ul className="flex flex-col items-center gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/products" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:text-pink-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
})

export default Header