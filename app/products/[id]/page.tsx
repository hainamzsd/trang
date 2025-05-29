"use client"

import { useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "../../../components/cart-context"

// Product data structure (same as in products/page.tsx)
const categories = [
  "LenAcrylic",
  "LenBamboo", 
  "LenCotton",
  "LenMohair",
  "LenPha",
  "LenSilk",
  "LenWool"
]

const categoryPrices = {
  LenAcrylic: 20000,
  LenBamboo: 80000,
  LenCotton: 15000,
  LenMohair: 50000,
  LenPha: 40000,
  LenSilk: 200000,
  LenWool: 52000,
}

const categoryDescriptions = {
  LenAcrylic: "Sợi Acrylic cao cấp, mềm mại và bền bỉ. Phù hợp cho việc đan len mùa đông, giữ ấm tốt và dễ bảo quản.",
  LenBamboo: "Sợi tre thiên nhiên, thân thiện môi trường. Có tính năng kháng khuẩn tự nhiên, thấm hút ẩm tốt và mát mẻ.",
  LenCotton: "Sợi cotton 100% tự nhiên, thoáng khí và an toàn cho da. Lý tưởng cho đồ trẻ em và người có da nhạy cảm.",
  LenMohair: "Sợi mohair cao cấp từ lông dê Angora, có độ bóng tự nhiên và cảm giác mượt mà đặc biệt.",
  LenPha: "Sợi pha trộn độc đáo, kết hợp ưu điểm của nhiều loại sợi khác nhau, tạo nên chất lượng vượt trội.",
  LenSilk: "Sợi tơ tằm thiên nhiên cao cấp, mang lại cảm giác sang trọng và đẳng cấp cho sản phẩm.",
  LenWool: "Sợi len cừu truyền thống, giữ ấm tuyệt vời và có độ đàn hồi tự nhiên, phù hợp mọi thời tiết."
}

// Generate products array
const products: any[] = []
categories.forEach((category) => {
  for (let i = 1; i <= 24; i++) {
    products.push({
      id: products.length + 1,
      name: `${category.replace("Len", "")} Sợi Premium`,
      shortName: category.replace("Len ", "") + " Sợi",
      price: categoryPrices[category as keyof typeof categoryPrices],
      category: category,
      image: `/${category}/${i}.png`,
      description: categoryDescriptions[category as keyof typeof categoryDescriptions],
      features: [
        "Chất lượng cao cấp nhập khẩu",
        "Màu sắc bền đẹp, không phai",
        "An toàn cho sức khỏe", 
        "Dễ dàng chăm sóc và bảo quản",
        "Phù hợp cho mọi độ tuổi"
      ],
      specifications: {
        "Trọng lượng": "50g/cuộn",
        "Độ dài": "120-150m/cuộn", 
        "Thành phần": "Theo từng loại sợi",
        "Xuất xứ": "Việt Nam/Nhập khẩu",
        "Bảo quản": "Nơi khô ráo, thoáng mát"
      }
    })
  }
})

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { addToCart } = useCart()
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isZoomed, setIsZoomed] = useState(false)
  const [activeTab, setActiveTab] = useState("description")
  
  const productId = parseInt(params.id as string)
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sản phẩm không tồn tại</h1>
        <Link href="/products" className="text-pink-800 hover:underline">
          ← Quay lại trang sản phẩm
        </Link>
      </div>
    )
  }

  // Generate related images (simulating multiple product images)
  const productImages = []
  const categoryIndex = categories.indexOf(product.category)
  for (let i = 1; i <= 6; i++) {
    const imageNum = ((productId - 1) % 24) + 1
    const altImageNum = (imageNum + i - 1) % 24 + 1
    productImages.push(`/${product.category}/${altImageNum}.png`)
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-24">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-800">Trang chủ</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-pink-800">Sản phẩm</Link>
            <span>/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div 
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsZoomed(true)}
            >
              <div className="aspect-square flex items-center justify-center p-8">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2">
              {productImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white rounded-lg shadow cursor-pointer overflow-hidden ${
                    selectedImageIndex === index ? 'ring-2 ring-pink-800' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <div className="aspect-square flex items-center justify-center p-2">
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-contain max-w-full max-h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                  {product.category.replace("Len", "Sợi ")}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">(4.8/5 - 124 đánh giá)</span>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <div className="text-4xl font-bold text-pink-800 mb-2">
                {product.price.toLocaleString('vi-VN')}₫
              </div>
              <div className="text-sm text-gray-600">
                <span className="line-through mr-2">{(product.price * 1.2).toLocaleString('vi-VN')}₫</span>
                <span className="text-green-600 font-medium">Tiết kiệm 20%</span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Số lượng:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Thêm vào giỏ hàng
                </motion.button>
                <motion.button
                  className="px-6 py-3 border-2 border-pink-800 text-pink-800 rounded-lg font-medium hover:bg-pink-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ♡
                </motion.button>
              </div>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Miễn phí vận chuyển</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Đổi trả 30 ngày</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bảo hành chất lượng</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'description', label: 'Mô tả sản phẩm' },
                { id: 'specifications', label: 'Thông số kỹ thuật' },
                { id: 'reviews', label: 'Đánh giá (124)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'text-pink-800 border-b-2 border-pink-800'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Giới thiệu sản phẩm</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Đặc điểm nổi bật</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-pink-800 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Thông số kỹ thuật</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Đánh giá khách hàng</h3>
                <div className="text-center py-12 text-gray-500">
                  <p>Tính năng đánh giá sẽ được cập nhật sớm</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    whileHover={{ y: -4 }}
                  >
                    <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={200}
                        height={200}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                        {relatedProduct.shortName}
                      </h3>
                      <p className="text-lg font-bold text-pink-800">
                        {relatedProduct.price.toLocaleString('vi-VN')}₫
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-[80vh] bg-white rounded-lg">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt="Zoomed product"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 