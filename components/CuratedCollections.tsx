"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const collections = [
    {
      name: "Len Acrylic",
      description: "Sợi len Acrylic mềm mại, nhẹ và giữ nhiệt tốt cho mùa đông.",
      image: "/LenAcrylic/1.png",
      link: "/LenAcrylic",
    },
    {
      name: "Len Wool",
      description: "Len Wool tự nhiên, ấm áp và bền bỉ, phù hợp cho mọi thời tiết.",
      image: "/LenWool/1.png",
      link: "/collections/lens-mastery",
    },
    {
      name: "Len Pha",
      description: "Sợi len pha kết hợp ưu điểm của nhiều loại sợi, mang đến sự thoải mái tối đa.",
      image: "/LenPha/1.png",
      link: "/collections/vietnamese-treasures",
    },
    {
      name: "Len Mohair",
      description: "Len Mohair cao cấp, mềm mịn và bóng đẹp, tạo cảm giác sang trọng.",
      image: "/LenMohair/1.png",
      link: "/collections/artisan-knits",
    },
];

export default function BoSuuTapTuyenChon() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-serif font-bold text-pink-900">Bộ Sưu Tập Tuyển Chọn</h2>
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
              aria-label="Cuộn trái"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
              aria-label="Cuộn phải"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {collections.map((collection, index) => (
            <div
              key={index}
              className="relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl overflow-hidden group snap-center"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{collection.name}</h3>
                <p className="text-pink-100 mb-4">{collection.description}</p>
                <Link
                  href={collection.link}
                  className="inline-flex items-center gap-2 text-pink-200 hover:text-white transition-colors"
                >
                  Khám Phá Bộ Sưu Tập <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
