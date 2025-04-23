import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Về Chúng Tôi</h3>
            <p className="text-sm">
              Wool Forest cung cấp các sản phẩm len cao cấp, ống kính và sản phẩm truyền thống Việt Nam. 
              Chúng tôi tự hào về chất lượng và sự khéo léo trong từng sản phẩm.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/wools" className="hover:text-pink-600">
                  Len
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-600">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-600">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Dịch Vụ Khách Hàng</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="hover:text-pink-600">
                  Thông Tin Vận Chuyển
                </Link>
              </li>
              <li>
                <Link href="/return" className="hover:text-pink-600">
                  Đổi Trả & Hoàn Tiền
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-pink-600">
                  Câu Hỏi Thường Gặp
                </Link>
              </li>
              <li>
                <Link href="/term" className="hover:text-pink-600">
                  Điều Khoản & Điều Kiện
                </Link>
              </li>
              <li>
                <Link href="/policy" className="hover:text-pink-600">
                  Chính Sách Bảo Mật
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Kết Nối Với Chúng Tôi</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/profile.php?id=61573046981705" className="text-pink-800 hover:text-pink-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-pink-800 hover:text-pink-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-pink-800 hover:text-pink-600">
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-sm">Đăng ký nhận bản tin của chúng tôi:</p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="w-full px-3 py-2 text-pink-800 bg-white border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-200 text-center">
          <p>&copy; {new Date().getFullYear()} Wool Forest. Mọi quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
