'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string[]; // Array of colors
  size: string[];  // Array of sizes
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  console.log('Loaded cart items from localStorage:', cartItems);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

      if (existingItemIndex >= 0) {
        // Item exists, update it
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];

        // Add new colors or sizes if they don't exist
        const updatedColors = [...existingItem.color];
        item.color.forEach((color) => {
          if (!updatedColors.includes(color)) {
            updatedColors.push(color);
          }
        });

        const updatedSizes = [...existingItem.size];
        item.size.forEach((size) => {
          if (!updatedSizes.includes(size)) {
            updatedSizes.push(size);
          }
        });

        // Update quantity
        updatedItems[existingItemIndex] = {
          ...existingItem,
          color: updatedColors,
          size: updatedSizes,
          quantity: existingItem.quantity + item.quantity,
        };

        return updatedItems;
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, item];
      }
    });
  };


  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
