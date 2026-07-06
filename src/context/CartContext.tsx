"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  requirements?: string;
};

export type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, `quantity`>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  cartCount: number;
  wishlistItems: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(`clinic_cart`);
    const savedWishlist = localStorage.getItem(`clinic_wishlist`);
    
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {}
    }
    
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (e) {}
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(`clinic_cart`, JSON.stringify(cartItems));
      localStorage.setItem(`clinic_wishlist`, JSON.stringify(wishlistItems));
    }
  }, [cartItems, wishlistItems, isLoaded]);

  const addToCart = (newItem: Omit<CartItem, `quantity`>) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === newItem.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const toggleWishlist = (newItem: WishlistItem) => {
    setWishlistItems((prev) => {
      const exists = prev.find((item) => item.id === newItem.id);
      if (exists) {
        return prev.filter((item) => item.id !== newItem.id);
      }
      return [...prev, newItem];
    });
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, wishlistItems, toggleWishlist }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return context;
}