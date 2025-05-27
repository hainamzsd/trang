"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Redirecting() {
  const router = useRouter()

  useEffect(() => {
    // Automatically redirect after 5 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-pink-800 mb-4">301</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Đang chuyển hướng...
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Trang này đã được di chuyển vĩnh viễn. Bạn sẽ được chuyển hướng tự động trong giây lát.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-pink-800 border-t-transparent rounded-full animate-spin"></div>
            <Link 
              href="/"
              className="inline-block px-8 py-3 bg-pink-800 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              Chuyển hướng ngay
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 