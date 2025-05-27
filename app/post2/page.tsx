import React from 'react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Share2, BookOpen, Users, Star, Play, CheckCircle, Lightbulb, Target } from "lucide-react"
import { Metadata } from 'next'

export const generateMetadata = (): Metadata => {
  return {
    title: "Học Móc Len Tại Wool Forest: Biến Sở Thích Thành Chất Riêng",
    description: "Khám phá hành trình học móc len từ cơ bản đến nâng cao cùng Wool Forest. Hướng dẫn chi tiết về dụng cụ, kỹ thuật và dự án cho người mới bắt đầu.",
    keywords: "học móc len, wool forest, móc len cơ bản, dụng cụ móc len, len milk cotton, len cotton",
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
      canonical: '/post2',
    },
    openGraph: {
      title: "Học Móc Len Tại Wool Forest: Biến Sở Thích Thành Chất Riêng",
      description: "Khám phá hành trình học móc len từ cơ bản đến nâng cao cùng Wool Forest. Hướng dẫn chi tiết về dụng cụ, kỹ thuật và dự án cho người mới bắt đầu.",
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["Wool Forest"],
      images: [
        {
          url: "/blog/hoc-moc-len.jpg",
          width: 1200,
          height: 630,
          alt: "Học móc len tại Wool Forest"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: "Học Móc Len Tại Wool Forest: Biến Sở Thích Thành Chất Riêng",
      description: "Khám phá hành trình học móc len từ cơ bản đến nâng cao cùng Wool Forest. Hướng dẫn chi tiết về dụng cụ, kỹ thuật và dự án cho người mới bắt đầu.",
      images: ["/blog/hoc-moc-len.jpg"],
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
    <div>
         {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Học móc len</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Học Móc Len Tại Wool Forest
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-8">Biến Sở Thích Thành Chất Riêng Của Bạn!</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              12 phút đọc
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Người mới bắt đầu
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              4.8/5 đánh giá
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
                Bạn đã bao giờ tự hỏi, giữa thế giới số đầy ắp thông tin và những cú lướt màn hình không ngừng, tại sao
                handmade nói chung và móc len nói riêng lại trở thành xu hướng hot hit đến thế? Hay nhìn thấy những sản
                phẩm len handmade cute xỉu trên mạng mà bạn chỉ muốn tự tay làm ngay không?
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Nếu đó là bạn, thì đúng người đúng thời điểm rồi đấy!
              </p>
            </div>

            {/* Section 1: Why Crochet is Trending */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-rose-500 pl-4">
                Vì Sao Móc Len Đang Làm Mưa Làm Gió Trong Giới Trẻ?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Học móc len không chỉ là một kỹ năng mà còn là hành trình khám phá sự sáng tạo tiềm ẩn trong mỗi chúng ta.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Giữa nhịp sống nhanh và vội, việc dành thời gian cho một hoạt động thủ công như móc len giúp bạn sống chậm lại,
                    tập trung vào hiện tại và tạo ra những giá trị thật sự từ đôi bàn tay mình.
                  </p>
                </div>

                <div className="relative">
                  <Image
                    src="/blog/hoc-moc-len.jpg"
                    alt="Học móc len tại Wool Forest"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </section>

            {/* Section 2: Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                &ldquo;Healing&rdquo; Tâm Hồn Hiệu Quả
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cảm thấy stress vì học hành, công việc hay drama tình cảm? Móc len là liệu pháp tuyệt vời giúp bạn xoa dịu tâm trí,
                  giảm căng thẳng và tìm thấy sự bình yên.
                </p>
              </div>
            </section>

            {/* Section 3: Creativity */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-4">
                Thỏa Sức Thể Hiện &ldquo;Cá Tính&rdquo;
              </h2>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bạn muốn chiếc túi tote độc quyền, không đụng hàng ai? Hay một chiếc áo len vừa vặn với phong cách riêng?
                  Móc len cho phép bạn tự do sáng tạo, biến ý tưởng thành hiện thực.
                </p>
              </div>
            </section>

            {/* Section 2: Beginner's Guide */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-indigo-500 pl-4">
                Hướng Dẫn Nhập Môn Móc Len Cho Người Mới Bắt Đầu
              </h2>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Không cần phải phù phép gì đâu, việc học móc len dễ hơn bạn tưởng nhiều! Hãy cùng Wool Forest khám phá
                  những điều cơ bản nhất để bạn có thể bắt đầu hành trình tạo tác của mình nhé.
                </p>
              </div>

              {/* Basic Stitches */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-2 text-indigo-600" />
                  1. Bắt Đầu Từ Đâu? Những Mũi Móc Cơ Bản Cần Nắm Vững
                </h3>

                <p className="text-gray-700 mb-6">
                  Đừng vội nhìn những sản phẩm phức tạp mà nản. Móc len chỉ gói gọn trong vài mũi cơ bản này thôi:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-700 mb-2">Mũi Bính (Chain Stitch - Ch/b)</h4>
                      <p className="text-gray-600 text-sm">
                        Đây là mũi khởi đầu cho hầu hết các sản phẩm. Giống như bảng chữ cái của móc len vậy.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-green-700 mb-2">Mũi Đơn (Single Crochet - Sc/X)</h4>
                      <p className="text-gray-600 text-sm">
                        Tạo ra bề mặt chắc chắn, dày dặn, thường dùng để móc thú bông, túi xách.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-700 mb-2">Mũi Kép (Double Crochet - Dc/F)</h4>
                      <p className="text-gray-600 text-sm">
                        Mũi cao hơn mũi đơn, tạo ra độ rủ và thông thoáng hơn thích hợp cho khăn, áo.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-orange-700 mb-2">Mũi Dời/Trượt (Slip Stitch - Slst/Z)</h4>
                      <p className="text-gray-600 text-sm">Dùng để kết thúc hàng, nối các bộ phận lại với nhau.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                  <p className="text-gray-700">
                    <strong>Tip:</strong> Hãy dành thời gian luyện tập thành thạo những mũi này. Bạn có thể tìm các
                    video hướng dẫn chi tiết trên YouTube hoặc tham khảo tài liệu của Wool Forest để nắm vững kỹ thuật
                    cầm kim và móc chuẩn nhất.
                  </p>
                </div>
              </div>

              {/* Tools Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
                  2. Công Cụ Tối Thượng Cần Có: Kim Móc và Các Phụ Kiện Đắc Lực
                </h3>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">Để bắt đầu, bạn cần có:</p>

                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Kim Móc:</strong> Kim có nhiều kích cỡ khác nhau (từ 0.5mm đến
                        10mm hoặc hơn). Đối với người mới, nên chọn kim có kích thước trung bình (khoảng 2.5mm - 4.0mm).
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Kéo:</strong> Để cắt len.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Kim Khâu Len:</strong> Dùng để giấu len thừa, nối các chi
                        tiết.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Đánh Dấu Mũi:</strong> Cực kỳ hữu ích để đánh dấu mũi đầu tiên
                        hoặc cuối cùng của hàng.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Yarn Selection */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-rose-600" />
                  3. Nhân Vật Chính: Chọn Len &quot;Chuẩn Gu&quot; Cho Người Mới
                </h3>

                <p className="text-gray-700 mb-6">
                  Đây là phần đau đầu nhưng cũng thú vị nhất nè! Thị trường len vô vàn, nhưng để bắt đầu Wool Forest gợi
                  ý bạn nên chọn:
                </p>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-rose-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-rose-700 mb-3">Len Milk Cotton</h4>
                      <p className="text-gray-700">
                        Cực kỳ phổ biến cho người mới! Len Milk Cotton mềm mại, đa dạng màu sắc, dễ móc, giá thành phải
                        chăng, phù hợp để móc thú bông, khăn, mũ. Wool Forest có đủ bộ sưu tập Len Milk Cotton với bảng
                        màu &quot;xịn xò&quot;!
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-blue-700 mb-3">Len Cotton</h4>
                      <p className="text-gray-700">
                        Thích hợp cho các sản phẩm cần độ thấm hút tốt như khăn tắm, lót ly, túi. Len Cotton thường chắc
                        chắn và đứng form hơn.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-green-700 mb-3">
                        Len Sợi Tổng Hợp (Acrylic/Polyester)
                      </h4>
                      <p className="text-gray-700">
                        Bền, nhẹ, không gây kích ứng, đa dạng màu sắc và thường có giá thành phải chăng. Tuy nhiên, độ
                        mềm mại có thể không bằng len tự nhiên.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gradient-to-r from-rose-100 to-orange-100 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-800 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-orange-600" />
                    Lời khuyên từ Wool Forest:
                  </h4>
                  <p className="text-gray-700">
                    Khi mới học móc len, hãy chọn len sợi vừa phải, màu sáng. Sợi quá to hoặc quá nhỏ sẽ khó móc, còn
                    màu tối sẽ khó nhìn thấy mũi móc, dễ nản đó nha!
                  </p>
                </div>
              </div>

              {/* Small Projects */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Play className="w-6 h-6 mr-2 text-green-600" />
                  4. Bắt Đầu Với Dự Án &quot;Nhỏ Mà Có Võ&quot;
                </h3>

                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <p className="text-gray-700 mb-4">
                    Đừng vội vàng &ldquo;tham vọng&rdquo; móc ngay một chiếc áo khoác hay chăn lớn né! Hãy bắt đầu với các dự án
                    nhỏ, dễ hoàn thành để tạo động lực:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🥤 Móc Lót Ly (Coaster)</h4>
                    <p className="text-gray-600 text-sm">Dễ làm, nhanh xong, và bạn có thể dùng ngay.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🧽 Móc Khăn Lau Bàn</h4>
                    <p className="text-gray-600 text-sm">Đơn giản, thực tế.</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🌸 Móc Hoa Len</h4>
                    <p className="text-gray-600 text-sm">
                      Nhiều kiểu dáng, có thể dùng làm phụ kiện cài áo, trang trí.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🔑 Móc Khóa Nhỏ</h4>
                    <p className="text-gray-600 text-sm">
                      Một em thú bông mini hoặc hình trái tim sẽ là khởi đầu đáng yêu.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Image
                    src="/ANH6.png"
                    alt="Chậu hoa len màu xanh dương"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>

                <p className="text-gray-700 mt-6">
                  Sau khi thành thạo các dự án nhỏ, bạn có thể level up lên các sản phẩm lớn hơn như túi xách, mũ, khăn
                  choàng... Tất cả nguyên liệu và dụng cụ cần thiết cho mọi dự án đều có sẵn tại Wool Forest!
                </p>
              </div>
            </section>

            {/* Expert Tips */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-500 pl-4">
                Kinh Nghiệm Xương Máu Từ Hội Móc Len Lâu Năm
              </h2>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Đừng Sợ Sai</h4>
                        <p className="text-gray-600 text-sm">
                          Ai cũng phải có những mũi móc đầu tiên thô kệch. Sai thì gỡ, làm lại. Quan trọng là kiên trì!
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Xem Video Hướng Dẫn</h4>
                        <p className="text-gray-600 text-sm">
                          Visual luôn dễ hiểu hơn chữ viết. Lên YouTube tìm các channel dạy móc len uy tín.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Học Cách Đọc Chart</h4>
                        <p className="text-gray-600 text-sm">
                          Chart móc len giống như &quot;bản đồ kho báu&quot;. Khi đã quen với các ký hiệu, bạn có thể móc bất cứ
                          thứ gì.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Gia Nhập Cộng Đồng</h4>
                        <p className="text-gray-600 text-sm">
                          Đừng ngại hỏi han. Các group móc len luôn có hội chị em nhiệt tình giúp đỡ.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 font-bold text-sm">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Quan Trọng Nhất Là Chill</h4>
                        <p className="text-gray-600 text-sm">
                          Hãy xem móc len là sở thích để thư giãn, đừng biến nó thành áp lực. Cứ từ từ tận hưởng!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Đừng chần chừ nữa! 🧶</h2>
                <p className="text-lg mb-6 opacity-90">
                  Hãy để Wool Forest cùng bạn móc nên những câu chuyện sáng tạo, những khoảnh khắc thư giãn và những sản
                  phẩm độc nhất vô nhị.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold text-wrap">
                  Học Móc Len Ngay Hôm Nay!
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default page