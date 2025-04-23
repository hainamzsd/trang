"use client"

import { ShieldCheck, Lock, AlertTriangle, Mail, User, Eye, Server, FileWarning } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Chính Sách Bảo Mật</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tại Wool Forest, chúng tôi coi trọng việc bảo vệ thông tin cá nhân và quyền riêng tư của khách hàng. Chính
          sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-[#f8f5f0] p-6 rounded-lg border border-[#e6dfd5] mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-6 w-6 text-pink-800" />
            <h2 className="text-xl font-medium">Cam kết bảo mật</h2>
          </div>
          <p className="text-muted-foreground italic">
            Wool Forest cam kết bảo vệ thông tin cá nhân của quý khách theo quy định của pháp luật hiện hành và những
            thông tin mà quý khách cung cấp cho chúng tôi sẽ được sử dụng để nâng cao chất lượng dịch vụ và trải nghiệm
            mua sắm.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-pink-800" />
              <CardTitle>Quy định về bảo mật dữ liệu</CardTitle>
            </div>
            <CardDescription>Cách chúng tôi bảo vệ thông tin của bạn</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-medium">Bảo vệ thông tin cá nhân</h3>
              <p className="text-muted-foreground">
                Thông tin của quý khách (Tên, địa chỉ, thông tin ngân hàng, thông tin đặt hàng, thông tin các giao
                dịch...) sẽ được bảo vệ trên trang web mà không được cung cấp cho bên thứ ba nào trừ khi được các cơ
                quan thẩm quyền của nhà nước CHXHCN Việt Nam yêu cầu.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Khiếu nại về thông tin cá nhân</h3>
              <p className="text-muted-foreground">
                Trong trường hợp khách hàng phát hiện thông tin của mình được sử dụng sai mục đích trên website, khách
                hàng có thể gửi email khiếu nại việc thông tin cá nhân bị sử dụng sai mục đích hoặc phạm vi đã thông báo
                đến email quản lý để nhận được sự hỗ trợ kịp thời.
              </p>
              <div className="flex items-center gap-2 bg-pink-50 p-3 rounded-md">
                <Mail className="h-5 w-5 text-pink-800" />
                <p className="font-medium">Email tiếp nhận khiếu nại: woolforestshop@gmail.com</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Bảo mật hệ thống</h3>
              <p className="text-muted-foreground">
                Việc tấn công hệ thống bảo mật của website để đánh cắp dữ liệu khách hàng, thay đổi nội dung website,
                đăng tải các bài viết hay hình ảnh vi phạm pháp luật nhà nước CHXHCN Việt Nam được cho là hành động phạm
                tội và sẽ bị truy tố bởi cơ quan chức năng.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-medium">Đánh giá của khách hàng</h3>
              <p className="text-muted-foreground">
                Các đánh giá của khách hàng được nêu ra trên website là đánh giá thật và đã được công bố công khai thực
                tế trên các trang mạng xã hội (ví dụ Facebook, Instagram, Zalo,...) hoặc được Wool Forest xin ý kiến
                chia sẻ lại lên website. Người đánh giá cho Wool Forest nhận thức được việc Wool Forest có thể sử dụng
                tên tài khoản lúc đánh giá và nội dung đánh giá để đăng lại lên trang web này. Nếu quý khách hàng muốn
                gỡ bỏ đánh giá, xin vui lòng liên hệ để nhận được sự hỗ trợ.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-pink-800" />
              <CardTitle>Thông tin chúng tôi thu thập</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Thông tin cá nhân: họ tên, địa chỉ, email, số điện thoại</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Thông tin thanh toán: chi tiết thẻ, tài khoản ngân hàng (khi bạn thanh toán)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Thông tin đơn hàng: sản phẩm đã mua, lịch sử mua hàng</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Thông tin kỹ thuật: địa chỉ IP, loại thiết bị, trình duyệt web</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-pink-800" />
              <CardTitle>Mục đích sử dụng thông tin</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Xử lý và giao đơn hàng của bạn</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Gửi thông báo về tình trạng đơn hàng và cập nhật giao hàng</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Cải thiện sản phẩm và dịch vụ của chúng tôi</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Gửi thông tin về sản phẩm mới, khuyến mãi (nếu bạn đồng ý)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Server className="h-5 w-5 text-pink-800" />
              <CardTitle>Thời gian lưu trữ thông tin</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Chúng tôi sẽ lưu trữ thông tin cá nhân của bạn trong thời gian cần thiết để thực hiện các mục đích nêu
              trong chính sách này, trừ khi pháp luật yêu cầu hoặc cho phép thời gian lưu trữ lâu hơn. Thông tin đơn
              hàng sẽ được lưu trữ ít nhất 2 năm để hỗ trợ giải quyết khiếu nại và cải thiện dịch vụ.
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-100 bg-pink-50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileWarning className="h-5 w-5 text-pink-800" />
              <CardTitle>Quyền của khách hàng</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Quý khách có quyền:</p>
            <div className="space-y-3 pl-5">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Yêu cầu truy cập vào thông tin cá nhân của mình</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Yêu cầu chỉnh sửa thông tin không chính xác</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Yêu cầu xóa thông tin cá nhân trong một số trường hợp</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <p>Phản đối việc xử lý thông tin cá nhân trong một số trường hợp</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-lg mb-2">Liên hệ về vấn đề bảo mật</h3>
              <p className="text-muted-foreground">
                Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu liên quan đến chính sách bảo mật của chúng tôi, vui
                lòng liên hệ qua email: <span className="font-medium">woolforestshop@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 border border-pink-100 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-pink-800 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-lg mb-2">Cập nhật chính sách</h3>
              <p className="text-muted-foreground">
                Chính sách bảo mật này có thể được cập nhật theo thời gian. Chúng tôi sẽ thông báo về những thay đổi
                quan trọng bằng cách đăng thông báo nổi bật trên trang web của chúng tôi hoặc gửi email thông báo trực
                tiếp đến bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
