"use client"

import { useState } from "react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Merino Wool Yarn",
    price: 12.99,
    category: "Wool",
    image: "/placeholder.svg?height=300&width=300&text=Merino+Wool+Yarn",
  },
  {
    id: 2,
    name: "DSLR Camera Lens",
    price: 299.99,
    category: "Lens",
    image: "/placeholder.svg?height=300&width=300&text=DSLR+Camera+Lens",
  },
  {
    id: 3,
    name: "Vietnamese Coffee",
    price: 15.99,
    category: "Vietnamese",
    image: "/placeholder.svg?height=300&width=300&text=Vietnamese+Coffee",
  },
  {
    id: 4,
    name: "Alpaca Wool Scarf",
    price: 49.99,
    category: "Wool",
    image: "/placeholder.svg?height=300&width=300&text=Alpaca+Wool+Scarf",
  },
  {
    id: 5,
    name: "Wide-Angle Lens",
    price: 249.99,
    category: "Lens",
    image: "/placeholder.svg?height=300&width=300&text=Wide-Angle+Lens",
  },
  {
    id: 6,
    name: "Vietnamese Silk",
    price: 89.99,
    category: "Vietnamese",
    image: "/placeholder.svg?height=300&width=300&text=Vietnamese+Silk",
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [cart, setCart] = useState<any>([])

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const addToCart = (product:any) => {
    setCart([...cart, product])
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-pink-800 mb-8">Our Products</h1>

      <div className="mb-8">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
        >
          <option value="All">All Categories</option>
          <option value="Wool">Wool</option>
          <option value="Lens">Lens</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
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
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

