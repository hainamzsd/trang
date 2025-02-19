import Image from "next/image"

const woolCreations = [
  { name: "Hand-knitted Sweater", image: "/sp1.png" },
  { name: "Cozy Wool Blanket", image: "/sp2.png" },
  { name: "Felted Wool Art", image: "/sp3.png" },
]

export default function WoolCreations() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-pink-800 mb-12">Wool Creations</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-serif font-bold text-pink-700 mb-4">Crafted with Our Wool</h3>
            <p className="text-gray-600 mb-6">
              Discover the endless possibilities of our premium wool. From cozy sweaters to intricate art pieces, see
              how our customers transform our wool into beautiful creations.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {woolCreations.map((creation, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <Image
                  src={creation.image}
                  alt={creation.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-white">{creation.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

