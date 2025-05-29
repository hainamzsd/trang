"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Error301Page() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/products')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        {/* 301 Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.8 
          }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full shadow-2xl">
            <span className="text-4xl font-bold text-white">301</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Trang Đã Được Chuyển Hướng
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600 mb-8"
        >
          301 - Moved Permanently
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Chuyển Hướng Tự Động
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Trang <span className="font-semibold text-pink-600">/wools</span> đã được chuyển vĩnh viễn sang 
            <span className="font-semibold text-pink-600"> /products</span>. 
            Bạn sẽ được chuyển hướng tự động sau <span className="font-bold text-pink-600">{countdown}</span> giây.
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <motion.div
              className="bg-gradient-to-r from-pink-500 to-pink-600 h-2 rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Đi Ngay Tới Products
              </motion.button>
            </Link>
            
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300"
              >
                Về Trang Chủ
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg"
        >
          <div className="flex items-start">
            <svg className="w-6 h-6 text-pink-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-pink-800 mb-2">
                Thông Tin Về 301 Redirect
              </h3>
              <p className="text-pink-700 text-sm leading-relaxed">
                301 Moved Permanently là mã trạng thái HTTP cho biết rằng trang web đã được chuyển vĩnh viễn 
                đến một URL mới. Điều này giúp SEO và trải nghiệm người dùng tốt hơn.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Countdown Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 text-sm text-gray-500"
        >
          Tự động chuyển hướng sau {countdown} giây...
        </motion.div>
      </div>
    </div>
  )
} 