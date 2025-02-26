import Image from "next/image";

export default function SplitSection() {
<<<<<<< HEAD
    return (
      <section className="min-h-screen flex flex-col md:flex-row bg-white">
        <div className="md:w-1/2 relative h-96 md:h-auto">
          <div className="sticky top-0 h-screen">
            <Image
              src="/showcase/1.png"
              alt="Quá Trình Thủ Công"
              layout="fill"
              className="parallax-layer"
            />
          </div>
        </div>
  
        <div className="md:w-1/2 py-24 px-8 md:px-16 bg-pink-50">
          <div className="max-w-2xl mx-auto space-y-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-pink-900">Di Sản Nghệ Nhân</h3>
              <p className="text-gray-600 leading-relaxed">
                Qua nhiều thế hệ, các nghệ nhân của chúng tôi đã hoàn thiện sự cân bằng tinh tế giữa kỹ thuật truyền thống
                và đổi mới hiện đại. Mỗi sản phẩm đều kể một câu chuyện về di sản văn hóa và sự tỉ mỉ trong từng chi tiết.
              </p>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-pink-900">Đạo Đức Bền Vững</h3>
              <p className="text-gray-600 leading-relaxed">
                Chúng tôi hợp tác trực tiếp với các cộng đồng địa phương tại Việt Nam và các nhà cung cấp có ý thức bảo vệ môi trường,
                đảm bảo nguồn nguyên liệu có đạo đức và thực hành thương mại công bằng trong toàn bộ chuỗi cung ứng.
              </p>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-pink-900">Tầm Nhìn Sáng Tạo</h3>
              <p className="text-gray-600 leading-relaxed">
                Bộ sưu tập ống kính của chúng tôi được tuyển chọn bởi các nhiếp ảnh gia chuyên nghiệp, mang đến những công cụ giúp biến 
                khoảnh khắc thành những câu chuyện hình ảnh sống động với độ sắc nét tuyệt vời.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}
=======
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-96 md:h-auto relative">
        <div className="md:sticky md:top-0 h-96 md:h-screen">
          <Image
            src="/showcase/1.png"
            alt="Quá Trình Thủ Công"
            layout="fill"
            objectFit="cover"
            className="parallax-layer"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 py-24 px-8 md:px-16 bg-pink-50">
        <div className="max-w-2xl mx-auto space-y-16">
          <div className="space-y-4">
            <h3 className="text-2xl  text-pink-900">Di Sản Nghệ Nhân</h3>
            <p className="text-gray-600 leading-relaxed">
              Qua nhiều thế hệ, các nghệ nhân của chúng tôi đã hoàn thiện sự cân bằng tinh tế giữa kỹ thuật truyền thống
              và đổi mới hiện đại. Mỗi sản phẩm đều kể một câu chuyện về di sản văn hóa và sự tỉ mỉ trong từng chi tiết.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl  text-pink-900">Đạo Đức Bền Vững</h3>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi hợp tác trực tiếp với các cộng đồng địa phương tại Việt Nam và các nhà cung cấp có ý thức bảo vệ môi trường,
              đảm bảo nguồn nguyên liệu có đạo đức và thực hành thương mại công bằng trong toàn bộ chuỗi cung ứng.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl  text-pink-900">Tầm Nhìn Sáng Tạo</h3>
            <p className="text-gray-600 leading-relaxed">
              Bộ sưu tập ống kính của chúng tôi được tuyển chọn bởi các nhiếp ảnh gia chuyên nghiệp, mang đến những công cụ giúp biến
              khoảnh khắc thành những câu chuyện hình ảnh sống động với độ sắc nét tuyệt vời.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> master
