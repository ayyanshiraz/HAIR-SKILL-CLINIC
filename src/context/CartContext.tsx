"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  priceDisplay?: string;
  image: string;
  quantity: number;
  requirements?: string;
};

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  priceDisplay?: string;
  image: string;
  description?: string;
  specs?: string[];
};

type CartContextType = {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  cartCount: number;
  addToCart: (item: Omit<CartItem, `quantity`>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, change: number) => void;
  toggleWishlist: (item: WishlistItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(`hairSkillCart`);
    const savedWishlist = localStorage.getItem(`hairSkillWishlist`);
    
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error(`Error parsing cart data`);
      }
    }
    
    if (savedWishlist) {
      try {
        setWishlistItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error(`Error parsing wishlist data`);
      }
    }
    
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(`hairSkillCart`, JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(`hairSkillWishlist`, JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, isInitialized]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (newItem: Omit<CartItem, `quantity`>) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  const toggleWishlist = (newItem: WishlistItem) => {
    setWishlistItems((prev) => {
      const isExisting = prev.some((item) => item.id === newItem.id);
      if (isExisting) {
        return prev.filter((item) => item.id !== newItem.id);
      }
      return [...prev, newItem];
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        clearCart
      }}
    >
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