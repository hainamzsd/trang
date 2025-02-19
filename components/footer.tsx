import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Wool & Lens Vietnam offers premium wools, lenses, and authentic Vietnamese products. We pride ourselves on
              quality and craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/wools" className="hover:text-pink-600">
                  Wools
                </Link>
              </li>
              <li>
                <Link href="/lenses" className="hover:text-pink-600">
                  Lenses
                </Link>
              </li>
              <li>
                <Link href="/vietnamese" className="hover:text-pink-600">
                  Vietnamese Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="hover:text-pink-600">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-pink-600">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-pink-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-pink-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-pink-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-pink-800 hover:text-pink-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-pink-800 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-pink-800 hover:text-pink-600">
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-sm">Sign up for our newsletter:</p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-pink-800 bg-white border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-200 text-center">
          <p>&copy; {new Date().getFullYear()} Wool & Lens Vietnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

