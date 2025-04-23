"use client"

import { Truck, RefreshCw, Clock, MapPin, CreditCard, Mail, Package, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-serif text-center mb-8">Chính Sách Vận Chuyển & Đổi Trả</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tại Wool Forest, chúng mình cam kết mang đến trải nghiệm mua sắm trọn vẹn với chính sách vận chuyển và đổi trả
        rõ ràng, minh bạch.
      </p>


       

        <div  className="space-y-8">
          <div className="bg-[#f8f5f0] p-6 rounded-lg border border-[#e6dfd5] mb-8">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="h-6 w-6 text-pink-800" />
              <h2 className="text-xl font-medium">Đổi Trả & Hoàn Tiền</h2>
            </div>
            <p className="text-muted-foreground mb-6 italic">
              Chúng mình luôn mong muốn bạn hài lòng với mỗi sản phẩm từ Wool Forest – dù là chiếc khăn len thủ công hay
              cuộn len nhỏ xinh bạn dùng để sáng tạo.
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-pink-800" />
                <CardTitle>Chính Sách Đổi/Trả</CardTitle>
              </div>
              <CardDescription>Áp dụng trong những trường hợp sau</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Thời gian hỗ trợ:</h3>
                <p className="text-muted-foreground">Trong vòng 3 ngày kể từ ngày bạn nhận hàng.</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Áp dụng với:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Sản phẩm bị lỗi do sản xuất</li>
                  <li>Giao nhầm mẫu, màu hoặc số lượng</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Điều kiện đổi trả:</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Sản phẩm còn nguyên tem, chưa qua sử dụng</li>
                  <li>Có hình ảnh/video chứng minh lỗi hoặc sai sót</li>
                  <li>Có mã đơn hàng hoặc hoá đơn mua hàng</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-pink-800" />
                <CardTitle>Chính Sách Hoàn Tiền</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Nếu không còn sản phẩm thay thế hoặc bạn không muốn đổi, Wool Forest sẽ hoàn tiền 100% theo phương thức
                thanh toán ban đầu trong vòng 3–5 ngày làm việc.
              </p>
            </CardContent>
          </Card>

          <Card className="border-pink-100 bg-pink-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-pink-800" />
                <CardTitle>Lưu Ý</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Không áp dụng đổi/trả với nguyên liệu len đã cắt ra, sản phẩm làm theo yêu cầu riêng, hoặc lỗi do sử
                dụng sai cách.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-600" />
                <CardTitle>Cần Hỗ Trợ?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Hãy inbox fanpage, gọi hotline hoặc gửi email cho tụi mình – Wool Forest luôn sẵn sàng lắng nghe và giải
                quyết thật tận tâm 💛
              </p>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}
