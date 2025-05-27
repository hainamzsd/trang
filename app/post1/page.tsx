import React from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2, BookOpen, Users, Star } from "lucide-react"
import { Metadata } from 'next'
import Script from 'next/script'

export const generateMetadata = (): Metadata => {
  return {
    title: "Chart Móc Len: Trợ Thủ Đắc Lực Của Nàng Mê Len | Wool Forest",
    description: "Khám phá bí quyết đọc chart móc len từ A-Z cùng Wool Forest. Hướng dẫn chi tiết về các loại chart móc len, cách đọc và sử dụng chart hiệu quả cho người mới bắt đầu.",
    keywords: "chart móc len, hướng dẫn móc len, học móc len, wool forest, móc len cơ bản, ký hiệu móc len, pattern móc len",
    authors: [{ name: "Wool Forest" }],
    creator: "Wool Forest",
    publisher: "Wool Forest",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://woolforest.shop'),
    alternates: {
      canonical: '/post1',
    },
    openGraph: {
      title: "Chart Móc Len: Trợ Thủ Đắc Lực Của Nàng Mê Len | Wool Forest",
      description: "Khám phá bí quyết đọc chart móc len từ A-Z cùng Wool Forest. Hướng dẫn chi tiết về các loại chart móc len, cách đọc và sử dụng chart hiệu quả cho người mới bắt đầu.",
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["Wool Forest"],
      images: [
        {
          url: "/ANH1.png",
          width: 1200,
          height: 630,
          alt: "Chart Móc Len - Wool Forest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Chart Móc Len: Trợ Thủ Đắc Lực Của Nàng Mê Len | Wool Forest",
      description: "Khám phá bí quyết đọc chart móc len từ A-Z cùng Wool Forest. Hướng dẫn chi tiết về các loại chart móc len, cách đọc và sử dụng chart hiệu quả cho người mới bắt đầu.",
      images: ["/ANH1.png"],
      creator: "@woolforest"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

const page = () => {
  return (
    <>
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Chart Móc Len: Trợ Thủ Đắc Lực Của Nàng Mê Len",
            "description": "Khám phá bí quyết đọc chart móc len từ A-Z cùng Wool Forest. Hướng dẫn chi tiết về các loại chart móc len, cách đọc và sử dụng chart hiệu quả cho người mới bắt đầu.",
            "image": "/ANH1.png",
            "author": {
              "@type": "Organization",
              "name": "Wool Forest"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Wool Forest",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://woolforest.com/post1"
            }
          })
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-rose-100 text-rose-700 hover:bg-rose-200">Hướng dẫn móc len</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              CHART MÓC LEN: &ldquo;TRỢ THỦ&rdquo; ĐẮC LỰC CỦA NÀNG MÊ LEN!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              WOOL FOREST &ldquo;BẬT MÍ&rdquo; CÁCH LÀM QUEN NGHỆ THUẬT SỢI TỪ A-Z!
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                10 phút đọc
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Dành cho người mới
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                4.9/5 đánh giá
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 pb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Mấy bà bánh bèo nhà mình ơi, có phải dạo này cứ lướt TikTok, Instagram là lại dính thính mấy em túi xách
                  handmade, áo khoác len điệu đà hay mấy bé thú nhồi bông móc len cưng xỉu hông? Nhìn người ta làm mê quá,
                  muốn tự tay lụm liền một em về cho bằng chị bằng em mà lại ngơ ngác với mấy cái pattern toàn chữ với số
                  dài dằng dặc?
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Khỏi lo nha! Bài viết này chính là &ldquo;kim chỉ nam&rdquo; giúp mấy bà unlock bí kíp đọc chart móc len siêu dễ,
                  siêu nhanh để hành trình học móc len của mấy bà không còn là mơ với Wool Forest!
                </p>
              </div>

              {/* Section 1: What is Crochet Chart */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-rose-500 pl-4">
                  Chart Móc Len Là Gì Mà Ai Cũng &ldquo;Đổ&rdquo;?
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Hông phải tự nhiên mà chart móc len được mệnh danh là bảo bối của mọi tín đồ móc len đâu nha! Đơn
                      giản là vì nó biến những dòng chữ khô khan thành những hình ảnh, ký hiệu trực quan, dễ hiểu như xem
                      bản đồ kho báu vậy.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Thay vì phải lướt lướt đọc từng câu &ldquo;móc 1 mũi đơn, móc 2 mũi kép...&rdquo;, nàng chỉ cần nhìn vào chart,
                      pick đúng ký hiệu và quất thôi! Chill hơn hẳn đúng hông?
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      src="/ANH1.png"
                      alt="Chart móc len và những cuộn len"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Với những dự án móc len phức tạp, nhiều họa tiết hay cần độ chính xác cao, chart chính là &ldquo;phao cứu
                  sinh&rdquo; giúp nàng không bị lạc lối, đảm bảo thành phẩm ra lò chuẩn không cần chỉnh từng milimet. Móc là
                  phải xinh, đúng không nào?
                </p>
              </section>

              {/* Section 2: Types of Charts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  &ldquo;Đập Hộp&rdquo; Các Loại Chart Móc Len Phổ Biến Nhất
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Thế giới chart móc len cũng đa dạng lắm nha, nhưng cơ bản thì có 3 em nổi bật sau đây:
                </p>

                {/* Chart Type 1 */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Chart Ký Hiệu (Symbol Chart): &ldquo;Nữ Hoàng&rdquo; Phổ Biến Nhất
                  </h3>
                  <div className="bg-rose-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Đây là em được sủng ái nhất và chắc chắn nàng sẽ gặp nhiều nhất nè! Mỗi mũi móc sẽ được phiên dịch
                      thành một ký hiệu riêng, nhìn vào là biết ngay phải làm gì.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Ví dụ: hình tròn nhỏ xíu là mũi bính (chain), dấu cộng là mũi đơn (single crochet), chữ T gạch ngang
                      là mũi kép (double crochet)... cứ thế mà &ldquo;triển&rdquo;!
                    </p>
                  </div>
                  <div className="text-center mb-6">
                    <Image
                      src="/ANH2.png"
                      alt="Chart móc len Ký Hiệu (Symbol Chart)"
                      width={500}
                      height={250}
                      className="rounded-lg shadow-md mx-auto"
                    />
                  </div>
                </div>

                {/* Chart Type 2 */}
                <div className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Chart Sơ Đồ (Diagram Chart): Khi &ldquo;Level Up&rdquo; Lên Ngôi!
                  </h3>
                  <div className="bg-orange-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Em này thường chiếm sóng khi nàng muốn móc mấy họa tiết khó nhằn hơn một chút hoặc chế tạo ra mấy bé
                      thú bông 3D siêu cute, có hình khối.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Chart sơ đồ sẽ cho nàng thấy rõ vị trí từng mũi móc trên một tấm lưới, giúp nàng hình dung được hình
                      khối của sản phẩm.
                    </p>
                  </div>
                  <div className="text-center mb-6">
                    <Image
                      src="/ANH3.png"
                      alt="Chart móc len Sơ Đồ (Diagram Chart/Graph Chart)"
                      width={500}
                      height={250}
                      className="rounded-lg shadow-md mx-auto"
                    />
                  </div>
                </div>

                {/* Chart Type 3 */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Chart Văn Bản Kèm Biểu Đồ: Combo Hoàn Hảo!
                  </h3>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      Đây chính là level tiếp theo của sự thấu hiểu nè! Vừa có hướng dẫn chi tiết bằng chữ cho nàng nào
                      mắc chứng thích đọc từng dòng, vừa có thêm chart biểu đồ để nàng nghía cái là hiểu ngay tổng thể.
                      Combo này giúp nàng chắc kèo hơn, tránh mọi sai sót nha!
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: How to Read Charts */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-4">
                  Hack Não Đọc Chart Móc Len Cơ Bản
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Đừng xoắn nha mấy bà, đọc chart siêu dễ luôn! Follow ngay mấy tips này:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-blue-700">Bước 1: Học Thuộc Ký Hiệu</h4>
                      <p className="text-gray-600">
                        Đầu tiên và quan trọng nhất là phải nằm lòng các ký hiệu cơ bản. Giống như học bảng chữ cái hồi bé
                        vậy đó!
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-purple-700">Bước 2: Tìm &quot;Điểm Khởi Hành&quot;</h4>
                      <p className="text-gray-600">
                        Mọi chart đều có điểm bắt đầu, thường là mũi bính đầu tiên hoặc vòng tròn ma thuật.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-green-700">Bước 3: Bon Bon Theo Hàng/Vòng</h4>
                      <p className="text-gray-600">
                        Cứ tua từ phải sang trái (hoặc ngược lại tùy chart), rồi từ dưới lên trên.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-3 text-red-700">Bước 4: Để Mắt Đến Ký Hiệu Đặc Biệt</h4>
                      <p className="text-gray-600">
                        Mấy ký hiệu tăng mũi, giảm mũi hay lặp lại là cần phải tỉnh táo nha!
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-rose-100 to-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800">💡 Mẹo Nhỏ Siêu Xịn Sò:</h4>
                  <p className="text-gray-700">
                    Chuẩn bị ngay một cây bút chì hoặc bút đánh dấu. Móc xong hàng nào là tick vào hàng đó, đảm bảo không
                    bao giờ bị lạc trôi giữa biển mũi móc!
                  </p>
                </div>

                <div className="text-center mt-8">
                  <Image
                    src="/ANH4.png"
                    alt="Chart móc len 'Bánh kem Redvelvet'"
                    width={600}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
              </section>

              {/* Section 4: Tools and Materials */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-500 pl-4">
                  Kim Móc Và Sợi Len: &ldquo;Bộ Đôi Hoàn Hảo&rdquo;
                </h2>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nói thật nha, dù nàng có master chart móc len cỡ nào mà chọn sai kim, sai len là coi như xong phim!
                    Kích cỡ kim móc và loại len mà chart khuyến nghị là cực kỳ quan trọng đó.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nó sẽ quyết định sản phẩm của nàng có chuẩn size như mẫu không, có độ rủ, độ mềm mại đúng ý không.
                    Đừng phung phí công sức móc chỉ vì chọn sai nguyên liệu nha!
                  </p>
                </div>
              </section>

              {/* Section 5: Call to Action */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-rose-500 pl-4">
                  Nhận Quà Tại Wool Forest
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Ghé Cửa Hàng</h3>
                    <p className="text-gray-600 text-sm">Tư vấn trực tiếp, chạm tay vào thế giới len sợi đa sắc màu</p>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Workshop Đỉnh Cao</h3>
                    <p className="text-gray-600 text-sm">Cầm tay chỉ việc, học tất tần tật về chart móc len</p>
                  </Card>

                  <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Thư Viện Chart</h3>
                    <p className="text-gray-600 text-sm">Kho tàng chart từ cơ bản đến nâng cao, miễn phí</p>
                  </Card>
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-3"
                  >
                    Khám Phá Ngay Wool Forest
                  </Button>
                </div>
              </section>

              {/* Conclusion */}
              <section className="border-t pt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Kết Luận: Móc Là Mê Quên Lối Về!</h2>
                <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-8 rounded-lg text-center">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Thấy chưa, chart móc len đâu có khó nhằn như nàng nghĩ! Chỉ cần một chút kiên nhẫn, một chút mày mò là
                    nàng đã có thể chinh phục được nó rồi đó.
                  </p>
                  <p className="text-xl font-semibold text-gray-800">
                    Móc đi, chờ chi! Ai mà không thử là phí của giời đó nha! 🧶✨
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}

export default page