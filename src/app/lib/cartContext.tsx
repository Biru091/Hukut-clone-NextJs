"use client";
import { useEffect } from "react";
import {
  createContext,
  useContext,
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
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const addToCart = (productId: string) => {
    console.log("ADD CLICK", productId);

  setCart((prevCart) => {
    return prevCart.some((item) => item.productId === productId)
      ? prevCart.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      : [
          ...prevCart,
          {
            productId,
            quantity: 1,
          },
        ];
  });
};

     useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
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