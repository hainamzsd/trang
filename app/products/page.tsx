"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
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
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center cursor-pointer hover:bg-gradient-to-br hover:from-pink-50 hover:to-pink-100 transition-all duration-300 p-6">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={220}
                      height={220}
                      style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                      className="object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              
              <div className="p-6 space-y-4">
                <Link href={`/products/${product.id}`}>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-pink-800 transition-colors cursor-pointer line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">
                        {product.category.replace("Len", "Sợi ")}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">(4.8)</span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-pink-800">
                        {product.price.toLocaleString('vi-VN')}₫
                      </p>
                      <p className="text-sm text-gray-500 line-through">
                        {(product.price * 1.2).toLocaleString('vi-VN')}₫
                      </p>
                    </div>
                    <motion.button
                      onClick={(e) => handleAddToCart(product, e)}
                      className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full hover:from-pink-700 hover:to-pink-800 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Thêm vào giỏ
                    </motion.button>
                  </div>
                </div>

                {/* Quick features */}
                <div className="flex items-center justify-center space-x-4 pt-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Miễn phí ship</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Đổi trả 30 ngày</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Zoomed product"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
