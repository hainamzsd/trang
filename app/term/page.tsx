"use client"

import { Package, Receipt, RefreshCw, Globe, AlertTriangle, Copyright, Truck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl  mb-4">Điều Khoản & Điều Kiện</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vui lòng đọc kỹ các điều khoản và điều kiện dưới đây trước khi sử dụng website và dịch vụ của Wool Forest.
        </p>
      </div>

      <div className="space-y-8 ">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-pink-800" />
              <CardTitle>1. Điều khoản về sử dụng website</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-medium">Chấp thuận điều khoản</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Chúng tôi lập ra trang website bán hàng này và ngay khi quý khách truy cập vào website này đồng
                    nghĩa là quý khách chấp thuận với các điều khoản và chính sách đưa ra trong website này. Tất cả các
                    nội dung về điều khoản và chính sách đưa ra trong website này có thể thay đổi bất cứ khi nào và có
                    hiệu lực tức thì khi nó được đăng tải lên trên website mà không cần thông báo.
                  </p>
                  <p>
                    Khi quý khách tiếp tục truy cập vào website ngay sau nội dung mới được cập nhật nghĩa là quý khách
                    nhận thức và chấp thuận với các nội dung được đăng tải mới. Để thuận tiện trong việc sử dụng website
                    này, quý khách vui lòng kiểm tra nội dung về các điều khoản và chính sách để nắm được những cập nhật
                    mới nhất.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium">Điều kiện sử dụng</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Khi truy cập vào website chúng tôi, quý khách phải đảm bảo đủ 18 tuổi hoặc truy cập dưới sự giám sát
                    của bố mẹ hoặc người giám hộ hợp pháp, có đủ hành vi dân sự để thực hiện việc truy cập, mua bán hàng
                    hóa, trao đổi thư từ theo quy định của pháp luật của nhà nước CHXHCN Việt Nam hoặc nước sở tại nơi
                    quý khách đang sinh sống.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium">Tài khoản người dùng</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Quý khách có quyền tạo tài khoản (account) trên website của chúng tôi để thuận tiện cho việc giao
                    dịch, hưởng những lợi ích của khách hàng thân thiết hoặc quý khách có thể từ chối việc đăng ký tạo
                    tài khoản mà không ảnh hưởng đến chất lượng dịch vụ bán hàng. Trong trường hợp quý khách tạo tài
                    khoản trên website này, quý khách phải chấp thuận các điều khoản mà chúng tôi đưa ra trong mục "Điều
                    khoản mua hàng" và chịu trách nhiệm hoàn toàn về việc quản lý tên đăng nhập và mật khẩu và không để
                    bên thứ ba nào biết để truy cập vào tài khoản của mình trên website này. Chúng tôi không chịu trách
                    nhiệm cho bất cứ tổn thất nào khi quý khách không tuân thủ các điều khoản đã được nêu ra dù trực
                    tiếp hay gián tiếp.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium">Email quảng cáo</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Chúng tôi có thể gửi các email quảng cáo dựa vào email lịch sử mua hàng của quý khách đã đăng ký.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-base font-medium">Giới hạn sử dụng</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Chúng tôi không chấp nhận cho bên nào sử dụng trang web của mình, trừ những trường hợp có đưa ra
                    bằng văn bản cụ thể, cho những mục đích quảng cáo hay thương mại hay bất kì các hoạt động hợp pháp
                    hay bất hợp pháp nào được quy định trong luật hiện hành của nhà nước CHXHCN Việt Nam hoặc/và các quy
                    định của luật pháp chung của các nước khác.
                  </p>
                  <p>
                    Việc thông tin qua lại, đặt hàng, phản hồi, bán hàng hóa, đổi, trả hàng hóa chỉ phát sinh khi bên
                    mua hàng (gọi là khách hàng) có nhu cầu muốn mua mặt hàng được Wool Forest đăng ký thông tin trên
                    website và bên bán hàng (gọi là bên bán) có thể cung cấp mặt hàng đã thông tin trên website theo
                    trình tự các bước đã được thiết lập trên website. Mọi hoạt động như đã nêu ở mục này phải tuân thủ
                    luật pháp nước CHXHCN Việt Nam và Wool Forest không chịu trách nhiệm khi hàng hóa của mình bị gửi
                    kèm, hay bị lợi dụng vào những mục đích xấu, trái pháp luật được quy định trong các luật hiện hành
                    của nước CHXHCN Việt Nam. Sản phẩm của Wool Forest bao gồm những nguyên vật liệu và đóng gói tem
                    nhãn đã được thông báo và mô tả cụ thể trên website và chúng tôi không chịu trách nhiệm khi sản phẩm
                    mình có những thành phần, chi tiết khác mà đã không được nêu ra trên website.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Copyright className="h-5 w-5 text-pink-800" />
              <CardTitle>3. Thương hiệu và bản quyền</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-3">
              Website bán hàng này đã được thông báo với Bộ Công Thương và hoạt động với mục đích bán các mặt hàng đăng
              trên website.
            </p>
            <p className="mb-3">
              Thương hiệu, nhãn hiệu Wool Forest sẽ được bảo hộ theo luật sở hữu trí tuệ, các nội dung thông tin, thiết
              hình học và ngoại quan sản phẩm, hình ảnh, video, âm nhạc, logo, mã source code đều là tài sản của người
              đại diện hợp pháp của nhãn hiệu Wool Forest và website https://www.woolforest.shop
            </p>
            <p>Toàn bộ nội dung của website được bảo vệ bởi luật bản quyền của nhà nước CHXHCN Việt Nam.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-pink-800" />
              <CardTitle>4. Mua hàng và xác nhận đơn hàng</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-medium">4.1 Mua hàng trên website</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Việc mua hàng trên website là việc lựa chọn hàng hóa và hoàn tất các bước đã được thiết kế để đặt
                    hàng và thanh toán. Chúng tôi cũng chấp nhận đặt hàng qua điện thoại hoặc email, tuy nhiên đơn hàng
                    vẫn phải được khởi tạo trên website (bởi người mua hoặc do Wool Forest khởi tạo theo thông tin mà
                    người mua cung cấp thông qua điện thoại hoặc email) để thuận tiện trong việc theo dõi và quản lý đơn
                    hàng.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-medium">4.2 Xác nhận đơn hàng</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Việc đặt hàng thông qua website sẽ được xác nhận tình trạng gửi cho email đăng ký khi mua hàng.
                    Chúng tôi sẽ liên lạc với người mua để xác nhận thông tin đặt hàng (sản phẩm, số lượng, địa điểm
                    giao hàng, giá cả, phương thức thanh toán). Wool Forest có toàn quyền trong việc xác nhận đơn đặt
                    hàng sẽ được giao hoặc hủy đơn hàng với bất cứ lý do nào thông qua việc liên lạc với người mua cho
                    dù người mua đã thanh toán hoặc chưa thanh toán. Nếu người mua đã thanh toán thì chúng tôi sẽ căn cứ
                    vào thông tin chuyển tiền đã nhận thông qua tài khoản ngân hàng để chúng tôi tiến hành việc hoàn trả
                    lại cho người gửi tiền.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-medium">4.3 Giá bán</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Giá bán của sản phẩm đăng trên website chưa bao gồm giá vận chuyển của bên thứ 3, Wool Forest sẽ
                    thông báo với khách hàng đã đặt hàng thành công về số tiền hàng và tiền vận chuyển để người mua
                    thuận tiện trong việc hoàn tất thủ tục thanh toán để nhận hàng. Trong trường hợp giá đăng trên
                    website có sự sai lệch do bất cứ lý do gì, chúng tôi có quyền từ chối đơn hàng đã đặt như đã nêu ở
                    mục 4.2 này.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base font-medium">4.4 Vai trò và trách nhiệm</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Bên bán:</p>
                      <p>
                        Gửi đủ hàng và đúng chủng loại như đơn hàng đã được xác nhận cho khách hàng. Xác nhận tình trạng
                        thanh toán cho khách hàng trên hệ thống. Ngoài ra bên bán phải phản hồi thông tin về khiếu nại
                        hay hàng đổi trả khi khách hàng gửi yêu cầu và hỗ trợ gửi trả hàng hay hoàn tiền theo chính sách
                        đổi trả hàng.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Khách hàng:</p>
                      <p>
                        Khách hàng trách nhiệm thanh toán cho bên giao hàng đây đủ số tiền nếu chọn hình thức thanh toán
                        khi nhận hàng (COD) hoặc thanh toán cho bên bán số tiền hàng nếu chọn chuyển khoản qua ngân
                        hàng. Khách hàng phải có trách nhiệm thanh toán chi phí giao hàng cho bên giao hàng nếu chọn
                        hình thức thanh toán chuyển khoản qua ngân hàng.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-pink-800" />
              <CardTitle>5. Đổi trả hàng hóa</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p>
              Mọi vấn đề về đổi trả hàng hóa sẽ được áp dụng ở doanh mục{" "}
              <a href="/doi-tra-hoan-tien" className="text-pink-800 hover:underline">
                Đổi Trả & Hoàn Tiền
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-pink-800" />
              <CardTitle>6. Hóa đơn bán hàng</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Chúng tôi lập hóa đơn bán hàng cho tất cả các đơn đặt hàng và lưu trữ có thời hạn thông qua đơn vị thứ 3
              cung cấp dịch vụ hóa đơn điện tử. Quý khách điền thông tin người mua hàng, mã số thuế, địa chỉ để chúng
              tôi lập nên hóa đơn một cách đầy đủ nhất. Trường hợp người mua không yêu cầu cung cấp hóa đơn bán hàng,
              chúng tôi vẫn lập hóa đơn bán hàng theo thông tin người mua đã cung cấp trong đơn đặt hàng và ghi chú
              trong hóa đơn là người mua không lấy hóa đơn.
            </p>
            <p>
              Chúng tôi không cung cấp hóa đơn cho những mục đích khác hoặc sai lệch số tiền so với số tiền của đơn đặt
              hàng đã đặt.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-pink-800" />
              <CardTitle>7. Giao nhận hàng hóa/đổi trả</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Việc giao hàng tùy thuộc vào vị trí địa lý của nơi nhận để quyết định (được đồng thuận giữa người bán và
              người mua) có hay không việc sử dụng dịch vụ của bên thứ ba nhằm hỗ trợ việc giao nhận hàng hóa hay thu hộ
              COD.
            </p>
            <p>
              Chúng tôi không chịu trách nhiệm khi bên giao nhận giao sai hàng hóa mà gây ảnh hưởng trực tiếp hoặc gián
              tiếp đến người mua. Việc giao sai hàng hóa do lỗi bên bán sẽ được bên bán giao lại đúng theo đơn đặt hàng.
            </p>
          </CardContent>
        </Card>

        <div className="bg-pink-50 border border-pink-100 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-pink-800 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-lg mb-2">Lưu ý quan trọng</h3>
              <p className="text-muted-foreground">
                Bằng việc sử dụng website và dịch vụ của Wool Forest, quý khách đã đồng ý với tất cả các điều khoản và
                điều kiện được nêu trên. Chúng tôi có quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào trong
                Điều khoản mua bán hàng hóa này vào bất cứ lúc nào.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
