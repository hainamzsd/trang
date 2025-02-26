import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Artisanal Craftsmanship"
          layout="fill"
          objectFit="cover"
          className="scale-125 animate-zoom-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 to-pink-800/60" />
      </div>
      
      <div className="relative h-full flex items-center pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl ml-0 md:ml-20">
            <h1 className="text-5xl md:text-7xl  font-bold text-white mb-6 leading-tight font-serif ">
              Lưu giữ,<br/>
              <span className="text-pink-200 ">Kỉ niệm</span>
            </h1>
            <Link href="/products" className="group inline-flex items-center gap-4">
              <span className="text-lg font-semibold text-white border-b-2 border-pink-300 pb-1 transition-all group-hover:border-pink-100">
                Khám phá ngay
              </span>
              <ArrowRight className="text-pink-300 group-hover:text-pink-100 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white h-8 w-8" />
      </div>
    </section>
  )
}