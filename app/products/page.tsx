"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../../components/cart-context"

const categories = [
  "Tất cả",
  "LenAcrylic",
  "LenBamboo",
  "LenCotton",
  "LenMohair",
  "LenPha",
  "LenSilk",
  "LenWool"
]
const categoryPrices = {
  LenAcrylic: 20000, // Giá cho Len Acrylic
  LenBamboo: 80000,  // Giá cho Len Bamboo
  LenCotton: 15000,  // Giá cho Len Cotton
  LenMohair: 50000,  // Giá cho Len Mohair
  LenPha: 40000,     // Giá cho Len Pha
  LenSilk: 200000,    // Giá cho Len Silk
  LenWool: 52000,    // Giá cho Len Wool
};
const products: any[] = []

categories.slice(1).forEach((category) => {
  for (let i = 1; i <= 24; i++) {
    products.push({
      id: products.length + 1,
      name: category.replace("Len ", "") + " Sợi", // Ví dụ: Len Acrylic → Acrylic Sợi
      price: categoryPrices[category as keyof typeof categoryPrices], // Lấy giá từ categoryPrices
      category: category,
      image: `/${category}/${i}.png`,
    });
  }
});
export default function ProductsPage() {
  const { addToCart } = useCart()
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const cartIconRef = useRef<HTMLAnchorElement>(null)

  const filteredProducts = products.filter(product => 
    selectedCategory === "Tất cả" || product.category === selectedCategory
  )
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

  const handleAddToCart = (product: any, event: React.MouseEvent<HTMLButtonElement>) => {
    if (!cartIconRef.current) {
      console.error("Cart icon reference not found");
      addToCart(product); // Fallback without animation
      return;
    }
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const cartIconRect = cartIconRef.current.getBoundingClientRect();
    if (cartIconRect) {
      const flyElement = document.createElement("div")
      flyElement.style.position = "fixed"
      flyElement.style.left = `${buttonRect.left}px`
      flyElement.style.top = `${buttonRect.top}px`
      flyElement.style.width = "40px"
      flyElement.style.height = "40px"
      flyElement.style.background = "rgba(155, 81, 224, 0.8)"
      flyElement.style.borderRadius = "50%"
      flyElement.style.zIndex = "9999"
      document.body.appendChild(flyElement)

      flyElement.animate([
        { transform: `translate(0, 0) scale(1)`, opacity: 1 },
        { transform: `translate(${cartIconRect.left - buttonRect.left}px, ${cartIconRect.top - buttonRect.top}px) scale(0.2)`, opacity: 0 }
      ], {
        duration: 800,
        easing: "ease-in-out"
      }).onfinish = () => {
        flyElement.remove()
        addToCart(product)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-24 relative">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-pink-800 mb-8 text-center"
      >
        Bộ Sưu Tập Nguyên Liệu Cao Cấp
      </motion.h1>

      {/* Bộ lọc danh mục */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category 
                ? "bg-pink-800 text-white" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Lưới sản phẩm */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {currentProducts.map(product => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-pink-800">
                    {product.price.toLocaleString('vi-VN')}₫
                  </p>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="px-6 py-2 bg-pink-800 text-white rounded-full hover:bg-pink-700 transition-colors"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Phân trang */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const maxVisiblePages = 5 // Số trang hiển thị tối đa
  const halfVisiblePages = Math.floor(maxVisiblePages / 2)

  let startPage = Math.max(1, currentPage - halfVisiblePages)
  let endPage = Math.min(totalPages, currentPage + halfVisiblePages)

  if (currentPage <= halfVisiblePages) {
    endPage = Math.min(maxVisiblePages, totalPages)
  } else if (currentPage >= totalPages - halfVisiblePages) {
    startPage = Math.max(totalPages - maxVisiblePages + 1, 1)
  }

  const pages = []
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap px-2 py-3 rounded-lg bg-white shadow-md w-fit max-w-full">
        {/* Nút Trang trước */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="min-w-[40px] px-3 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ‹
        </button>

        {/* Trang đầu tiên */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className={`min-w-[40px] px-3 py-2 rounded-full ${
                currentPage === 1
                  ? "bg-pink-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="px-2 py-2">...</span>}
          </>
        )}

        {/* Các trang hiển thị */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`min-w-[40px] px-3 py-2 rounded-full ${
              currentPage === page
                ? "bg-pink-800 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Trang cuối cùng */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2 py-2">...</span>}
            <button
              onClick={() => onPageChange(totalPages)}
              className={`min-w-[40px] px-3 py-2 rounded-full ${
                currentPage === totalPages
                  ? "bg-pink-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Nút Trang sau */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="min-w-[40px] px-3 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ›
        </button>
      </div>
    </div>
  )
}
