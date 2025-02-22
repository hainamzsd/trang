// app/contact/page.tsx
"use client"

import { motion } from "framer-motion"
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl  font-bold text-pink-800 mb-6">
          Liên Hệ
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn 24/7
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-pink-50 p-8 rounded-xl">
            <h2 className="text-2xl  text-pink-800 mb-6">Thông Tin Liên Hệ</h2>
            
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
            <h2 className="text-2xl  text-pink-800 mb-6">Giờ Làm Việc</h2>
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

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl  text-pink-800 mb-6">Mạng Xã Hội</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com/wool-lens-vietnam" target="_blank" className="text-blue-600 hover:text-blue-700">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://zalo.me/0987654321" target="_blank" className="text-blue-500 hover:text-blue-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5h-3v-5h-3v5h-3v-9h3v1.5h3V7.5h3v9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl  text-pink-800 mb-6">Gửi Tin Nhắn</h2>
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
  )
}