import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Wools", image: "/cate1.png" },
  { name: "Lenses", image: "/cate2.png" },
  { name: "Vietnamese Products", image: "/cate3.png" },
]

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-pink-800 mb-12">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={1000}
                height={1000}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{category.name}</h3>
                <Link
                  href={`/products?category=${category.name.toLowerCase()}`}
                  className="text-white hover:text-pink-300 transition duration-300"
                >
                  Explore {category.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

