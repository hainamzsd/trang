"use client"

import { useState } from "react"
import { WheatIcon as Wool, Sparkles, HelpCircle, Search, ShoppingCart, Gift, Phone, MessageCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      id: "products",
      label: "Sản Phẩm",
      icon: <Wool className="h-5 w-5" />,
      questions: [
        {
          id: "wool-types",
          question: "Wool Forest bán những loại sợi len nào?",
          answer: (
            <div className="space-y-3">
              <p>Wool Forest hiện cung cấp đa dạng sợi len cao cấp, bao gồm:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Len Merino:</span> Sợi len tự nhiên, mềm mịn, giữ ấm tốt, phù hợp cho
                  mọi lứa tuổi.
                </li>
                <li>
                  <span className="font-medium">Len Acrylic:</span> Nhẹ, bền màu, giá cả phải chăng, dễ chăm sóc.
                </li>
                <li>
                  <span className="font-medium">Len Bamboo:</span> Thành phần tre tự nhiên, kháng khuẩn, thân thiện với
                  da nhạy cảm.
                </li>
                <li>
                  <span className="font-medium">Len Cotton:</span> Thấm hút mồ hôi, thoáng mát, lý tưởng cho mùa hè và
                  các sản phẩm trẻ em.
                </li>
                <li>
                  <span className="font-medium">Len Tổng hợp pha:</span> Kết hợp ưu điểm của nhiều chất liệu, tăng độ
                  bền và đa dạng hiệu ứng.
                </li>
              </ul>
            </div>
          ),
        },
        {
          id: "wool-selection",
          question: "Làm thế nào để chọn loại len phù hợp với dự án của tôi?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Độ dày (Weight):</span> Xác định dự án (áo len, khăn, mền…) để chọn DK,
                  Worsted, Bulky…
                </li>
                <li>
                  <span className="font-medium">Thành phần sợi:</span> Len thiên nhiên ấm hơn, len tổng hợp dễ chăm sóc,
                  len tre thoáng mát.
                </li>
                <li>
                  <span className="font-medium">Màu sắc & họa tiết:</span> Lên ý tưởng thiết kế, xem mẫu mẫu mã, bạn có
                  thể chọn len nhuộm đơn sắc hoặc len vằn vện.
                </li>
                <li>
                  <span className="font-medium">Gauge (mẫu cơ bản):</span> Kiểm tra số mũi – hàng/10cm để đảm bảo kích
                  thước sản phẩm đúng như ý.
                </li>
              </ul>
            </div>
          ),
        },
        {
          id: "dye-lot",
          question: "Chính sách về Dye Lot (batch màu) như thế nào?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Do tính chất nhuộm màu thủ công, mỗi lô (lot) len có thể chênh lệch nhẹ.</li>
                <li>Mua đủ cùng một LOT cho toàn bộ dự án để đảm bảo màu đồng nhất.</li>
                <li>Nếu đặt thêm sau, vui lòng cung cấp mã LOT cũ để chúng tôi kiểm tra tồn kho.</li>
              </ul>
            </div>
          ),
        },
        {
          id: "care-instructions",
          question: "Hướng dẫn chăm sóc sản phẩm sau khi hoàn thiện",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Giặt tay với nước lạnh, dùng xà phòng dịu nhẹ.</li>
                <li>Tránh vò mạnh, vắt nhẹ nhàng để không làm chùng sợi.</li>
                <li>Phơi ngang nơi khô thoáng, tránh ánh nắng trực tiếp.</li>
                <li>Không sử dụng chất tẩy mạnh hoặc chà xát bề mặt.</li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      id: "orders",
      label: "Đặt Hàng & Vận Chuyển",
      icon: <ShoppingCart className="h-5 w-5" />,
      questions: [
        {
          id: "order-process",
          question: "Cách đặt hàng và thanh toán",
          answer: (
            <div className="space-y-3">
              <ol className="list-decimal pl-5 space-y-2">
                <li>Chọn sản phẩm → Chọn màu, số lượng → "Thêm vào giỏ".</li>
                <li>Xem giỏ hàng → Kiểm tra đơn → "Thanh toán".</li>
                <li>
                  Điền thông tin giao hàng → Chọn phương thức thanh toán: Chuyển khoản, MoMo, ZaloPay, hoặc thanh toán
                  khi nhận hàng (COD).
                </li>
                <li>Xác nhận đơn → Nhận email/SMS xác nhận và mã vận đơn khi hàng được gửi.</li>
              </ol>
            </div>
          ),
        },
        {
          id: "shipping",
          question: "Thời gian và phí vận chuyển",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Thời gian:</span> 2–5 ngày làm việc (Nội thành TP.HCM) hoặc 3–7 ngày
                  (Toàn quốc).
                </li>
                <li>
                  <span className="font-medium">Phí vận chuyển:</span> Tùy trọng lượng và khu vực, hệ thống sẽ tự động
                  tính khi bạn nhập địa chỉ.
                </li>
                <li>
                  <span className="font-medium">Theo dõi đơn hàng:</span> Bạn sẽ nhận link track & trace qua email/SMS.
                </li>
              </ul>
            </div>
          ),
        },
        {
          id: "returns",
          question: "Chính sách đổi/trả hàng",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Đổi/trả trong 7 ngày kể từ ngày nhận hàng.</li>
                <li>Sản phẩm phải nguyên vẹn, chưa qua sử dụng, còn tem mác và hóa đơn.</li>
                <li>
                  Chi tiết quy trình và điều kiện xem tại trang{" "}
                  <a href="/doi-tra-hoan-tien" className="text-pink-800 hover:underline">
                    Đổi Trả & Hoàn Tiền
                  </a>
                  .
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      id: "services",
      label: "Dịch Vụ Khác",
      icon: <Sparkles className="h-5 w-5" />,
      questions: [
        {
          id: "wholesale",
          question: "Có bán sỉ (wholesale) cho cửa hàng/nhóm không?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Chúng tôi chào đón đối tác kinh doanh.</li>
                <li>
                  <span className="font-medium">MOQ (số lượng tối thiểu):</span> Liên hệ để được tư vấn chính sách giá
                  sỉ.
                </li>
                <li>Hỗ trợ catalogue, bảng màu, đặt hàng theo lô lớn với giá ưu đãi.</li>
              </ul>
            </div>
          ),
        },
        {
          id: "loyalty",
          question: "Wool Forest có chương trình khách hàng thân thiết hay khuyến mãi nào không?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Tích điểm trên mỗi đơn hàng để quy đổi voucher giảm giá.</li>
                <li>Ưu đãi sinh nhật, mã giảm giá đặc biệt cho thành viên VIP.</li>
                <li>
                  Thông tin chi tiết và cập nhật khuyến mãi xem tại trang{" "}
                  <a href="/khuyen-mai-hoi-vien" className="text-pink-800 hover:underline">
                    Khuyến Mãi & Hội Viên
                  </a>
                  .
                </li>
              </ul>
            </div>
          ),
        },
        {
          id: "gift-card",
          question: "Tôi có thể mua gift card (phiếu quà tặng) không?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Gift card từ 200.000₫ – 1.000.000₫, không giới hạn số lượng.</li>
                <li>Gửi trực tiếp qua email hoặc in giấy tặng bạn bè, người thân.</li>
              </ul>
            </div>
          ),
        },
        {
          id: "patterns",
          question: "Wool Forest có cung cấp mẫu (pattern) dệt móc kèm theo không?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>Nhiều sản phẩm len đi kèm pattern miễn phí do chính tay chuyên gia thiết kế.</li>
                <li>
                  Tham khảo thư viện pattern & video hướng dẫn tại trang{" "}
                  <a href="/hoc-det-moc" className="text-pink-800 hover:underline">
                    Học Dệt – Móc
                  </a>
                  .
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
    {
      id: "contact",
      label: "Liên Hệ & Hỗ Trợ",
      icon: <MessageCircle className="h-5 w-5" />,
      questions: [
        {
          id: "contact-support",
          question: "Làm thế nào để liên hệ khi cần hỗ trợ?",
          answer: (
            <div className="space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">Email:</span> support@woolforest.shop
                </li>
                <li>
                  <span className="font-medium">Hotline/Zalo:</span> 0388-154-088 (8h–21h hàng ngày)
                </li>
                <li>
                  <span className="font-medium">Fanpage Facebook:</span> Wool Forest
                </li>
                <li>
                  <span className="font-medium">Form liên hệ:</span> Truy cập trang{" "}
                  <a href="/lien-he" className="text-pink-800 hover:underline">
                    Liên Hệ
                  </a>{" "}
                  trên website.
                </li>
              </ul>
            </div>
          ),
        },
      ],
    },
  ]

  // Filter questions based on search query
  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.props.children.props.children.some(
            (item:any) => typeof item === "string" && item.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Câu Hỏi Thường Gặp</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tìm hiểu thông tin về sản phẩm, đặt hàng, vận chuyển và các dịch vụ khác của Wool Forest.
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          placeholder="Tìm kiếm câu hỏi..."
          className="pl-10"
          value={searchQuery}
          onChange={(e:any) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0"
            onClick={() => setSearchQuery("")}
          >
            ×
          </Button>
        )}
      </div>

      {searchQuery ? (
        <div className="space-y-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category) => (
              <Card key={category.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-pink-800">{category.icon}</div>
                    <CardTitle>{category.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Không tìm thấy kết quả</h3>
              <p className="text-muted-foreground">
                Không tìm thấy câu hỏi nào phù hợp với "{searchQuery}". Vui lòng thử từ khóa khác hoặc{" "}
                <a href="/lien-he" className="text-pink-800 hover:underline">
                  liên hệ với chúng tôi
                </a>{" "}
                để được hỗ trợ.
              </p>
            </div>
          )}
        </div>
      ) : (
        <Tabs defaultValue="products">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {faqCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                <span className="hidden md:inline-block">{category.icon}</span>
                <span>{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <div className="text-pink-800">{category.icon}</div>
                    <CardTitle>{category.label}</CardTitle>
                  </div>
                  <CardDescription>Các câu hỏi thường gặp về {category.label.toLowerCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {category.id === "contact" && (
                <div className="bg-[#f8f5f0] p-6 rounded-lg border border-[#e6dfd5]">
                  <div className="flex items-start gap-3 mb-4">
                    <Phone className="h-6 w-6 text-pink-800 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Vẫn chưa tìm thấy câu trả lời?</h3>
                      <p className="text-muted-foreground">
                        Nếu bạn không tìm thấy câu trả lời cho thắc mắc của mình, đừng ngần ngại liên hệ với chúng tôi
                        qua hotline <span className="font-medium">0388-154-088</span> hoặc gửi email đến{" "}
                        <span className="font-medium">support@woolforest.shop</span>. Chúng tôi luôn sẵn sàng hỗ trợ
                        bạn!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      )}

      <div className="mt-12 bg-pink-50 border border-pink-100 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <Gift className="h-12 w-12 text-pink-800" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2 text-center md:text-left">Bạn là người mới?</h3>
            <p className="text-muted-foreground mb-4 text-center md:text-left">
              Đăng ký nhận bản tin của chúng tôi để nhận voucher 10% cho đơn hàng đầu tiên và cập nhật về sản phẩm mới,
              hướng dẫn dệt móc, và khuyến mãi đặc biệt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Email của bạn" className="flex-grow" />
              <Button className="bg-pink-800 hover:bg-amber-700">Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
