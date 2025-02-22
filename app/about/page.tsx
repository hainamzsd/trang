// app/about/page.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl  font-bold text-pink-800 mb-6">
          Về Chúng Tôi
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Wool Forest - Nơi kết nối đam mê thủ công và nhiếp ảnh chuyên nghiệp
        </p>
      </motion.div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <Image
            src="/about-team.jpg"
            alt="Đội ngũ Wool & Lens"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl  text-pink-800 mb-6">Hành Trình Của Chúng Tôi</h2>
          <p className="text-gray-600 mb-6">
            Thành lập từ năm 2015, Wool & Lens Vietnam bắt đầu từ tình yêu với chất liệu tự nhiên 
            và nghệ thuật nhiếp ảnh. Chúng tôi cam kết mang đến những sản phẩm cao cấp nhất, 
            kết hợp tinh hoa thủ công Việt Nam với công nghệ hiện đại.
          </p>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-pink-800 mb-4">Triết Lý Hoạt Động</h3>
            <p className="text-gray-600">
              Sáng tạo không ngừng - Chất lượng vượt trội - Phát triển bền vững
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-pink-50 py-16 px-8 rounded-xl">
        <h2 className="text-3xl  text-center text-pink-800 mb-12">Giá Trị Cốt Lõi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Chất Liệu Cao Cấp", 
              content: "Nguyên liệu nhập khẩu & kiểm định nghiêm ngặt" },
            { title: "Thủ Công Tinh Xảo", 
              content: "Nghệ nhân lành nghề với hơn 10 năm kinh nghiệm" },
            { title: "Bảo Hành Trọn Đời", 
              content: "Chính sách đổi trả và bảo hành linh hoạt" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-pink-800 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="my-24">
        <h2 className="text-3xl  text-center text-pink-800 mb-12">Đội Ngũ Chuyên Gia</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Nguyễn Thị An", role: "Giám đốc Sáng tạo", photo: "/team-1.jpg" },
            { name: "Trần Văn Bình", role: "Chuyên gia Vật Liệu", photo: "/team-2.jpg" },
            { name: "Lê Thị Chi", role: "Quản lý Chất lượng", photo: "/team-3.jpg" },
            { name: "Phạm Đức Dũng", role: "Trưởng Phòng Kỹ Thuật", photo: "/team-4.jpg" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center bg-pink-100 py-12 rounded-xl">
        <h3 className="text-2xl text-pink-800 mb-6">Kết Nối Với Chúng Tôi</h3>
        <Link 
          href="https://facebook.com/wool-lens-vietnam" 
          target="_blank"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Theo dõi trên Facebook
        </Link>
      </div>
    </div>
  )
}