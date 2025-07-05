// CartProvider.jsx
import React from 'react';
import { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cart = useCart(); // This is the ONLY place useCart should be called
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};