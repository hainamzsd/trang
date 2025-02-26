import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageUrl: string
  category: string
}

export default function ProductCard({ id, name, price, imageUrl, category }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/product/${id}`}>
        <div className="relative h-64">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-pink-800 mb-2">{name}</h3>
          <p className="text-pink-600 font-medium">${price.toFixed(2)}</p>
          <p className="text-sm text-pink-500 mt-1">{category}</p>
        </div>
      </Link>
    </div>
  )
}

