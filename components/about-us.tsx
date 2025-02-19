import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl font-serif font-bold text-pink-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Wool & Lens Vietnam was born from a passion for quality craftsmanship and a desire to showcase the best of
              Vietnam to the world. Our journey began with a simple idea: to create a space where artisanal wool
              products, professional camera lenses, and authentic Vietnamese goods could coexist in harmony.
            </p>
            <Link href="/about" className="btn-secondary inline-flex items-center">
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image src="/11.png" alt="Wool crafting" width={300} height={200} className="rounded-lg shadow-lg" />
            <Image src="/12.png" alt="Camera lenses" width={300} height={200} className="rounded-lg shadow-lg" />
            <Image src="/13.png" alt="Vietnamese artisan" width={300} height={200} className="rounded-lg shadow-lg" />
            <Image src="/14.png" alt="Product display" width={300} height={200} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

