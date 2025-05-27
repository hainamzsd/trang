"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-pink-800 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Oops! Trang không tồn tại
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-pink-800 text-white rounded-full hover:bg-pink-700 transition-colors"
          >
            Quay về trang chủ
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 