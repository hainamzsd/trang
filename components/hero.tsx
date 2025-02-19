import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-pink-50">
      <Image
        src="/placeholder.svg?height=800&width=1200"
        alt="Wool & Lens Vietnam Hero"
        layout="fill"
        objectFit="cover"
        className="mix-blend-overlay"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-pink-800 mb-4">Discover Craftsmanship</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our curated collection of premium wools, professional lenses, and authentic Vietnamese products
          </p>
          <Link href="/products" className="btn-primary inline-flex items-center">
            Shop Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

