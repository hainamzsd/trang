"use client"

import { createContext, useContext, useState } from "react"

const CartContext = createContext({
  cart: [] as any[],
  addToCart: (product: any) => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([])

  const addToCart = (product: any) => {
    setCart(prev => [...prev, product])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)