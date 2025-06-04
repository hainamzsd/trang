import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import WoolCreations from "@/components/wool-creations"
import AsymmetricalGrid from "@/components/AsymmetricalGrid"
import SplitSection from "@/components/SplitSection"
import CuratedCollections from "@/components/CuratedCollections"
import Script from "next/script"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Google Ads (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16994659085"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-home"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16994659085');
          `
        }}
      />
      
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NB5P4Q6ZE2"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-home"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NB5P4Q6ZE2');
          `
        }}
      />
      
      <div className="overflow-hidden">
        <Hero />
        <CuratedCollections />
        <AsymmetricalGrid />
        <FeaturedProducts />
        <WoolCreations />
        <SplitSection />
        {/* <AboutUs /> */}
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Chào Mừng Đến Với Wool Forest</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Wool Forest là điểm đến lý tưởng cho những người yêu thích len sợi và sản phẩm thủ công truyền thống Việt Nam. 
              Chúng tôi tự hào mang đến cho bạn những sản phẩm len cao cấp, được lựa chọn kỹ lưỡng từ những nguồn nguyên liệu tốt nhất.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực len sợi, chúng tôi hiểu rõ nhu cầu của những người đam mê móc len. 
              Từ người mới bắt đầu đến những nghệ nhân chuyên nghiệp, Wool Forest luôn có những sản phẩm phù hợp với mọi cấp độ.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tại Sao Chọn Wool Forest?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Chất Lượng Cao Cấp</h3>
              <p className="text-gray-700">
                Mỗi sản phẩm len tại Wool Forest đều được lựa chọn kỹ lưỡng, đảm bảo độ mềm mại, bền bỉ và an toàn cho người sử dụng.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Hỗ Trợ Tận Tâm</h3>
              <p className="text-gray-700">
                Đội ngũ tư vấn viên của chúng tôi luôn sẵn sàng hỗ trợ bạn trong việc lựa chọn sản phẩm phù hợp và giải đáp mọi thắc mắc.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Giao Hàng Toàn Quốc</h3>
              <p className="text-gray-700">
                Với hệ thống giao hàng nhanh chóng và đáng tin cậy, chúng tôi cam kết mang sản phẩm đến tay bạn trong thời gian ngắn nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Khám Phá Sản Phẩm Của Chúng Tôi</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Len Milk Cotton</h3>
              <p className="text-gray-700 mb-4">
                Len Milk Cotton là lựa chọn hoàn hảo cho những người mới bắt đầu học móc len. Với độ mềm mại và dễ sử dụng, 
                đây là sản phẩm được yêu thích nhất tại Wool Forest.
              </p>
              <Link href="/wools" className="text-pink-600 hover:text-pink-700 font-medium">
                Xem thêm →
              </Link>
            </div>
            <div className="bg-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Dụng Cụ Móc Len</h3>
              <p className="text-gray-700 mb-4">
                Bộ sưu tập kim móc và dụng cụ hỗ trợ đa dạng, giúp bạn dễ dàng thực hiện các dự án móc len từ đơn giản đến phức tạp.
              </p>
              <Link href="/products" className="text-pink-600 hover:text-pink-700 font-medium">
                Xem thêm →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}