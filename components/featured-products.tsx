import Image from "next/image"

const products = [
  { name: "Merino Wool Yarn", price: 12.99, category: "Wool", image: "/sp1.png" },
  { name: "DSLR Camera Lens", price: 299.99, category: "Lens", image: "/sp2.png" },
  { name: "Vietnamese Coffee", price: 15.99, category: "Vietnamese", image: "/sp3.png" },
  { name: "Alpaca Wool Scarf", price: 49.99, category: "Wool", image: "/sp4.png" },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-pink-800 mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-pink-600 font-medium">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <button className="mt-4 w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

