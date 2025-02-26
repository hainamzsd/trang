"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-pink-800 mb-6">
          Về Chúng Tôi & Liên Hệ
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Wool Forest - Nơi kết nối đam mê thủ công và nhiếp ảnh chuyên nghiệp. Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7.
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
          <h2 className="text-3xl text-pink-800 mb-6">Hành Trình Của Chúng Tôi</h2>
          <p className="text-gray-600 mb-6">
            Thành lập từ năm 2015, Wool Forest bắt đầu từ tình yêu với chất liệu tự nhiên và nghệ thuật nhiếp ảnh. Chúng tôi cam kết mang đến những sản phẩm cao cấp nhất, kết hợp tinh hoa thủ công Việt Nam với công nghệ hiện đại.
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
      <div className="bg-pink-50 py-16 px-8 rounded-xl mb-24">
        <h2 className="text-3xl text-center text-pink-800 mb-12">Giá Trị Cốt Lõi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Chất Liệu Cao Cấp", content: "Nguyên liệu nhập khẩu & kiểm định nghiêm ngặt" },
            { title: "Thủ Công Tinh Xảo", content: "Nghệ nhân lành nghề với hơn 10 năm kinh nghiệm" },
            { title: "Bảo Hành Trọn Đời", content: "Chính sách đổi trả và bảo hành linh hoạt" },
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
      <div className="mb-24">
        <h2 className="text-3xl text-center text-pink-800 mb-12">Đội Ngũ Chuyên Gia</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Nguyễn Thị An", role: "Giám đốc Sáng tạo", photo: "/team-1.jpg" },
            { name: "Trần Văn Bình", role: "Chuyên gia Vật Liệu", photo: "/team-2.jpg" },
            { name: "Lê Thị Chi", role: "Quản lý Chất lượng", photo: "/team-3.jpg" },
            { name: "Phạm Đức Dũng", role: "Trưởng Phòng Kỹ Thuật", photo: "/team-4.jpg" },
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

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-pink-50 p-8 rounded-xl">
            <h2 className="text-2xl text-pink-800 mb-6">Thông Tin Liên Hệ</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-pink-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Trụ Sở Chính</p>
                  <p className="text-gray-600">Số 123, Đường Lê Lợi, Quận 1</p>
                  <p className="text-gray-600">TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-pink-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Điện Thoại</p>
                  <p className="text-gray-600">(+84) 28 3823 4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg className="w-6 h-6 text-pink-700 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">contact@woollens.vn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl">
            <h2 className="text-2xl text-pink-800 mb-6">Giờ Làm Việc</h2>
            <div className="space-y-2">
              <p className="flex justify-between text-gray-600">
                <span>Thứ 2 - Thứ 6:</span>
                <span>8:00 - 18:00</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span>Thứ 7:</span>
                <span>8:00 - 12:00</span>
              </p>
              <p className="flex justify-between text-gray-600">
                <span>Chủ Nhật & Ngày Lễ:</span>
                <span>Nghỉ</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl text-pink-800 mb-6">Gửi Tin Nhắn</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Họ và tên *</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Số điện thoại</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Nội dung *</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-800 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.632311092385!2d106.69900731526085!3d10.76273339233068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a4b1749d%3A0x428d5b6a90e1d4d5!2zMTIzIMSQLiBMw6ogTOG7i2ksIFBoxrDhu51uZyBQaOG6oW0sIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1629876543213"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}