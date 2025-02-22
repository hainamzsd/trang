import Image from "next/image"

const sanPhamLen = [
  { name: "Sản phẩm", image: "/sp1.png" },
  { name: "Sản phẩm", image: "/sp2.png" },
  { name: "Sản phẩm", image: "/sp3.png" },
]

export default function SanPhamLen() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-pink-800 mb-12">Sản Phẩm Từ Len</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif font-bold text-pink-700 mb-4">Được Tạo Ra Từ Len Của Chúng Tôi</h3>
            <p className="text-gray-600 mb-6">
              Khám phá những khả năng vô tận của len cao cấp của chúng tôi. Từ áo len ấm áp đến các tác phẩm nghệ thuật tinh xảo, hãy xem cách khách hàng của chúng tôi biến len thành những sản phẩm tuyệt đẹp.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sanPhamLen.map((sanPham, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <Image
                  src={sanPham.image}
                  alt={sanPham.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-white">{sanPham.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
