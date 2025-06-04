"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "../../components/cart-context"
import Image from "next/image"
import { Plus, Minus, MapPin, User, CreditCard, Truck, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export default function CheckoutPage() {
  const { cart, removeFromCart } = useCart()
  const [cartItems, setCartItems] = useState<CartItem[]>(cart.map((item) => ({ ...item, quantity: 1 })))
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    note: "",
  })
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [wantInvoice, setWantInvoice] = useState(false)
  const router = useRouter()

  const updateQuantity = (id: string, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    removeFromCart(id)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingFee = shippingMethod === "express" ? 50000 : 30000
  const discount = subtotal > 500000 ? 25000 : 0
  const total = subtotal + shippingFee - discount

  const handleInputChange = (field: string, value: string) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckout = async () => {
    if (!agreeTerms) {
      alert("Vui lòng đồng ý với điều khoản và điều kiện")
      return
    }

    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)

      // Clear cart after successful order
      cartItems.forEach((item) => removeFromCart(item.id))

      // Redirect after 4 seconds
      setTimeout(() => {
        router.push("/")
      }, 4000)
    }, 2000)
  }

  const handleTermsChange = (checked: boolean | "indeterminate") => {
    setAgreeTerms(checked === true)
  }

  const handleInvoiceChange = (checked: boolean | "indeterminate") => {
    setWantInvoice(checked === true)
  }

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-pink-800 mb-8">Giỏ hàng trống</h1>
          <p className="text-gray-600 mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng để thanh toán.</p>
          <Button
            onClick={() => router.push("/")}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full"
          >
            Tiếp tục mua sắm
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-pink-800 mb-2 text-center">Thanh toán đơn hàng</h1>
        <p className="text-center text-pink-600 mb-12">Vui lòng điền đầy đủ thông tin để hoàn tất đơn hàng của bạn</p>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Column - User Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-pink-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-pink-800">Thông tin liên hệ</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName" className="text-pink-700 font-medium">
                    Họ và tên *
                  </Label>
                  <Input
                    id="fullName"
                    value={userInfo.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-pink-700 font-medium">
                    Số điện thoại *
                  </Label>
                  <Input
                    id="phone"
                    value={userInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="0123 456 789"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email" className="text-pink-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="example@email.com"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-pink-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-pink-800">Địa chỉ giao hàng</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city" className="text-pink-700 font-medium">
                    Tỉnh/Thành phố *
                  </Label>
                  <Input
                    id="city"
                    value={userInfo.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="Hồ Chí Minh"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="district" className="text-pink-700 font-medium">
                    Quận/Huyện *
                  </Label>
                  <Input
                    id="district"
                    value={userInfo.district}
                    onChange={(e) => handleInputChange("district", e.target.value)}
                    placeholder="Quận 1"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="ward" className="text-pink-700 font-medium">
                    Phường/Xã *
                  </Label>
                  <Input
                    id="ward"
                    value={userInfo.ward}
                    onChange={(e) => handleInputChange("ward", e.target.value)}
                    placeholder="Phường Bến Nghé"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div className="md:col-span-3">
                  <Label htmlFor="address" className="text-pink-700 font-medium">
                    Địa chỉ cụ thể *
                  </Label>
                  <Input
                    id="address"
                    value={userInfo.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Số nhà, tên đường..."
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    required
                  />
                </div>
                <div className="md:col-span-3">
                  <Label htmlFor="note" className="text-pink-700 font-medium">
                    Ghi chú đơn hàng
                  </Label>
                  <Textarea
                    id="note"
                    value={userInfo.note}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("note", e.target.value)}
                    placeholder="Ghi chú thêm cho đơn hàng (tùy chọn)"
                    className="mt-1 border-pink-200 focus:border-pink-400"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-pink-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-pink-800">Phương thức vận chuyển</h2>
              </div>

              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                <div className="flex items-center space-x-3 p-4 border border-pink-200 rounded-lg">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-pink-800">Giao hàng tiêu chuẩn</p>
                        <p className="text-sm text-gray-600">3-5 ngày làm việc</p>
                      </div>
                      <span className="font-bold text-pink-600">30.000₫</span>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border border-pink-200 rounded-lg">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-pink-800">Giao hàng nhanh</p>
                        <p className="text-sm text-gray-600">1-2 ngày làm việc</p>
                      </div>
                      <span className="font-bold text-pink-600">50.000₫</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-pink-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-pink-800">Phương thức thanh toán</h2>
              </div>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-3 p-4 border border-pink-200 rounded-lg">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex-1 cursor-pointer">
                    <p className="font-medium text-pink-800">Thanh toán khi nhận hàng (COD)</p>
                    <p className="text-sm text-gray-600">Thanh toán bằng tiền mặt khi nhận hàng</p>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 border border-pink-200 rounded-lg">
                  <RadioGroupItem value="bank" id="bank" />
                  <Label htmlFor="bank" className="flex-1 cursor-pointer">
                    <p className="font-medium text-pink-800">Chuyển khoản ngân hàng</p>
                    <p className="text-sm text-gray-600">Chuyển khoản trước khi giao hàng</p>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-pink-100 sticky top-24">
              <h2 className="text-2xl font-serif font-bold text-pink-800 mb-6">Đơn hàng của bạn</h2>

              {/* Products */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-pink-800 text-sm">{item.name}</h4>
                      <p className="text-pink-600 text-sm">{item.price.toLocaleString("vi-VN")}₫</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 p-0 border-pink-300 text-pink-600"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 p-0 border-pink-300 text-pink-600"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-red-500 hover:text-red-700 text-xs"
                        >
                          Xóa
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 border-t border-pink-200 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tạm tính:</span>
                  <span className="font-medium">{subtotal.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Phí vận chuyển:</span>
                  <span className="font-medium">{shippingFee.toLocaleString("vi-VN")}₫</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Giảm giá (đơn hàng &gt; 500k):</span>
                    <span className="font-medium">-{discount.toLocaleString("vi-VN")}₫</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-pink-800 border-t border-pink-200 pt-3">
                  <span>Tổng cộng:</span>
                  <span>{total.toLocaleString("vi-VN")}₫</span>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" checked={agreeTerms} onCheckedChange={handleTermsChange} className="mt-1" />
                  <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                    Tôi đồng ý với{" "}
                    <a href="#" className="text-pink-600 hover:underline">
                      điều khoản và điều kiện
                    </a>{" "}
                    của Wool Forest
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox id="invoice" checked={wantInvoice} onCheckedChange={handleInvoiceChange} />
                  <Label htmlFor="invoice" className="text-sm text-gray-600">
                    Tôi muốn xuất hóa đơn VAT
                  </Label>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={!agreeTerms || isProcessing}
                className="w-full mt-6 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-3 rounded-full font-medium text-lg shadow-lg"
              >
                {isProcessing ? "Đang xử lý..." : "Đặt hàng ngay"}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3">
                Bằng cách đặt hàng, bạn đồng ý với chính sách bảo mật và điều khoản sử dụng của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl">
            <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-bold text-pink-800 mb-2">Đang xử lý đơn hàng</h3>
            <p className="text-gray-600 text-center">Vui lòng đợi trong giây lát...</p>
          </div>
        </div>
      )}

      {/* Success Animation */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center shadow-2xl max-w-md mx-4 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Đặt hàng thành công!</h2>
            <p className="text-gray-600 mb-4">
              Cảm ơn bạn đã tin tưởng Wool Forest. Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận đơn hàng.
            </p>
            <div className="bg-pink-50 p-4 rounded-lg w-full mb-4">
              <p className="text-sm text-pink-800 font-medium">Mã đơn hàng: #WF{Date.now().toString().slice(-6)}</p>
              <p className="text-sm text-gray-600">Tổng tiền: {total.toLocaleString("vi-VN")}₫</p>
            </div>
            <p className="text-sm text-gray-500">Đang chuyển về trang chủ...</p>
          </div>
        </div>
      )}
    </div>
  )
}
