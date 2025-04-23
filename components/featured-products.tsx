"use client"
import { useCart } from "./cart-context"
import Image from "next/image"
import Link from "next/link"
import VietnamFlagDecoration from "./vietnam-decoration"
const products = [
  {
    id: 1,
    name: "Len Acrylic",
    price: 15000,
    category: "Len Acrylic",
    image: "/LenAcrylic/1.png",
  },
  {
    id: 2,
    name: "Len Wool",
    price: 52000,
    category: "Len Wool",
    image: "/LenWool/2.png",
  },
  {
    id: 3,
    name: "Len Bamboo",
    price: 80000,
    category: "Len Bamboo",
    image: "/LenBamboo/2.png",
  },
  {
    id: 4,
    name: "Len Cotton",
    price: 15000,
    category: "Len Cotton",
    image: "/LenCotton/2.png",
  },
]

export default function FeaturedProducts() {
  const { addToCart } = useCart()

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white relative">
      {/* Vietnam flag decoration */}
      <VietnamFlagDecoration variant="light" density="low" className="opacity-70" />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-pink-900 mb-16">
          Sản Phẩm Nổi Bật
          <span className="block mt-2 text-lg font-sans font-normal text-gray-600">
            Tinh hoa thủ công - Chất lượng tuyển chọn
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-pink-100 text-pink-900 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-pink-900">{product.price.toLocaleString("vi-VN")}₫</p>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-pink-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-800 transition duration-300"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <Link
            href={"/products"}
            className="inline-flex items-center bg-transparent border-2 border-pink-900 text-pink-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-900 hover:text-white transition-all duration-300"
          >
            Xem Tất Cả Sản Phẩm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
