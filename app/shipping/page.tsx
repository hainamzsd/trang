"use client"

import { Truck, RefreshCw, Clock, MapPin, CreditCard, Mail, Package, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl"> 
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tại Wool Forest, chúng mình cam kết mang đến trải nghiệm mua sắm trọn vẹn với chính sách vận chuyển và đổi trả rõ ràng, minh bạch.
      </p>
      
    <div className='space-y-8'>
          <div className="bg-[#f8f5f0] p-6 rounded-lg border border-[#e6dfd5] mb-8 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-6 w-6 text-pink-800" />
              <h2 className="text-xl font-medium">Thông Tin Vận Chuyển</h2>
            </div>
            <p className="text-muted-foreground mb-6 italic">
              Tại Wool Forest, chúng mình hiểu rằng mỗi đơn hàng không chỉ là sản phẩm – mà còn là món quà bạn dành cho bản thân hoặc người thân yêu. Vì vậy, chúng mình luôn nỗ lực để quá trình vận chuyển diễn ra nhanh chóng, an toàn và chu đáo nhất.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-pink-800" />
                  <CardTitle className="text-lg">Thời Gian Xử Lý</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>1–2 ngày làm việc (không tính Chủ Nhật và ngày lễ).</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-pink-800" />
                  <CardTitle className="text-lg">Đơn Vị Vận Chuyển</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>GHTK, Viettel Post, J&T Express.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-pink-800" />
                <CardTitle className="text-lg">Thời Gian Giao Hàng Dự Kiến</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <div>
                  <p className="font-medium">Nội thành TP.HCM:</p>
                  <p className="text-muted-foreground">1–2 ngày</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <div>
                  <p className="font-medium">Các tỉnh thành khác:</p>
                  <p className="text-muted-foreground">3–5 ngày</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-pink-800" />
                <CardTitle className="text-lg">Phí Vận Chuyển</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <div>
                  <p className="font-medium">Đơn hàng từ 500.000đ trở lên:</p>
                  <p className="text-muted-foreground">Miễn phí vận chuyển toàn quốc</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-800 mt-2"></div>
                <div>
                  <p className="font-medium">Đơn hàng dưới 500.000đ:</p>
                  <p className="text-muted-foreground">Áp dụng phí theo từng khu vực</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-pink-800" />
                  <CardTitle className="text-lg">Theo Dõi Đơn Hàng</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Sau khi đặt hàng, bạn sẽ nhận được mã vận đơn qua email hoặc tin nhắn để theo dõi hành trình đơn hàng.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-pink-800" />
                  <CardTitle className="text-lg">Đóng Gói</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Tất cả đơn hàng được đóng gói cẩn thận bằng túi giấy, hộp carton hoặc túi zip thân thiện với môi trường, đảm bảo sản phẩm đến tay bạn vẫn nguyên vẹn và xinh xắn.</p>
              </CardContent>
            </Card>
          
          </div>
          </div>
    </div>
  )
}
