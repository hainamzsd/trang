<<<<<<< HEAD
"use client"

import { createContext, useContext, useState } from "react"
=======
import { createContext, useContext, useState } from "react";
>>>>>>> master

const CartContext = createContext({
  cart: [] as any[],
  addToCart: (product: any) => {},
<<<<<<< HEAD
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
=======
  removeFromCart: (productId: number) => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
>>>>>>> master
