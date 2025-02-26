import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../components/cart-context";
import Link from "next/link";

export default function CartPopup() {
  const { cart, removeFromCart } = useCart(); // Get removeFromCart from context
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative text-gray-700 hover:text-pink-700"
        aria-label="Cart"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      {isOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-pink-800">Giỏ hàng của bạn</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-600 hover:text-pink-700"
        >
          &times;
        </button>
      </div>

      {/* Bọc danh sách sản phẩm trong div có overflow-y-auto */}
      <div className="space-y-4 max-h-[50vh] overflow-y-auto">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  {product.price.toLocaleString("vi-VN")}₫
                </p>
              </div>
            </div>
            <button 
              className="text-red-600 hover:text-red-800"
              onClick={() => removeFromCart(product.id)}
            >
              Xoá
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Tổng tiền:</span>
          <span className="text-xl font-bold text-pink-800">
            {totalPrice.toLocaleString("vi-VN")}₫
          </span>
        </div>
        <Link href='/cart'>
          <button 
            className="w-full mt-4 px-6 py-2 bg-pink-800 text-white rounded-full hover:bg-pink-700 transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            Thanh toán
          </button>
        </Link>
      </div>
    </div>
  </div>
)}
    </>
  );
}
