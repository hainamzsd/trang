import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import VietnamFlagDecoration from "./vietnam-celebration"

export default function AsymmetricalGrid() {
  return (
    <section className="py-24 bg-pink-50 relative">
      {/* Vietnam flag decoration */}
      <VietnamFlagDecoration variant="light" density="low" />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-pink-900">Hành Trình Thủ Công</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 h-[800px]">
          <div className="md:col-span-3 h-full relative group">
            <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/30 z-10" />
            <Image
              src="/showcase/2.png"
              alt="Len Cao Cấp"
              layout="fill"
              objectFit="cover"
              className="scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-3xl font-serif text-white mb-4">Sợi Len Sang Trọng</h3>
              <Link href="/wools" className="text-pink-200 hover:text-white flex items-center gap-2">
                Khám Phá Chất Liệu Tự Nhiên <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="relative h-1/2 group">
              <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/30 z-10" />
              <Image
                src="/showcase/3.png"
                alt="Ống Kính Chuyên Nghiệp"
                layout="fill"
                objectFit="cover"
                className="scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 right-0 p-8 text-right z-20">
                <h3 className="text-3xl font-serif text-white">Nghệ Thuật Quang Học</h3>
                <Link href="/lenses" className="text-pink-200 hover:text-white flex items-center justify-end gap-2">
                  Chinh Phục Mọi Góc Nhìn <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className="relative h-1/2 group">
              <div className="absolute inset-0 bg-black/40 transition-all group-hover:bg-black/30 z-10" />
              <Image
                src="/showcase/4.png"
                alt="Thủ Công Mỹ Nghệ Việt Nam"
                layout="fill"
                objectFit="cover"
                className="scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <h3 className="text-3xl font-serif text-white">Báu Vật Văn Hóa</h3>
                <Link href="/vietnamese" className="text-pink-200 hover:text-white flex items-center gap-2">
                  Khám Phá Di Sản <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
