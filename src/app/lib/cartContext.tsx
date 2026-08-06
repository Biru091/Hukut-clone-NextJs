"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (productId: string) => void;
    removeFromCart: (productId: string) => void;

};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
 const removeFromCart = (productId: string) => {
  setCart((prevCart) =>
    prevCart.filter((item) => item.productId !== productId)
  );
};
  const addToCart = (productId: string) => {

    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.productId === productId
      );

      if (existing) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { productId, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart, }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}