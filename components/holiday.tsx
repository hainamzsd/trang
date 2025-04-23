"use client"

import Image from "next/image"
import Link from "next/link"
import { X } from 'lucide-react'
import { useHolidayPopup } from "./holiday-context"

export default function HolidayPopup() {
  const { isOpen, closePopup } = useHolidayPopup()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 animate-fade-in-up">
        <button 
          onClick={closePopup}
          className="absolute -top-2 -right-2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Đóng"
        >
          <X size={20} className="text-pink-900" />
        </button>
        
          <Image 
            src="/sal304.jpg" 
            alt="Chào mừng kỷ niệm 50 năm giải phóng miền Nam, thống nhất đất nước - Giảm giá lên đến 30%" 
            width={600} 
            height={600}
            className="rounded-lg shadow-xl"
          />
      </div>
    </div>
  )
}
