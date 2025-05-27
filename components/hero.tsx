"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useHolidayPopup } from "./holiday-context"

export default function Hero() {
  const { openPopup } = useHolidayPopup()

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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
              Lưu giữ,
              <br />
              <span className="text-pink-200">Kỉ niệm</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/products" className="group inline-flex items-center gap-4">
                <span className="text-lg font-semibold text-white border-b-2 border-pink-300 pb-1 transition-all group-hover:border-pink-100">
                  Khám phá ngay
                </span>
                {/* <ArrowRight className="text-pink-300 group-hover:text-pink-100 transition-colors" /> */}
              </Link>

              {/* Elegant 30/4 Button */}
              {/* <button
                onClick={openPopup}
                className="inline-flex items-center gap-2 bg-transparent border border-white/60 text-white px-4 py-1.5 rounded-md hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="font-medium text-sm relative">
                  <span className="relative z-10">Ưu đãi 30/4</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <div className="w-5 h-5 relative">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 8L14.5 10.5L12 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 16L7 13.5L9.5 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                    50
                  </div>
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white h-8 w-8" />
      </div>
    </section>
  )
}
