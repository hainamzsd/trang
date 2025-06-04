"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity?: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  updateQuantity?: (id: string, quantity: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id)

      if (existingProductIndex >= 0) {
        // If product exists, update quantity if it has one
        const updatedCart = [...prevCart]
        const existingProduct = updatedCart[existingProductIndex]

        if (existingProduct.quantity) {
          updatedCart[existingProductIndex] = {
            ...existingProduct,
            quantity: existingProduct.quantity + 1,
          }
        } else {
          updatedCart[existingProductIndex] = {
            ...existingProduct,
            quantity: 2, // First time adding quantity, set to 2 (1 existing + 1 new)
          }
        }

        return updatedCart
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
