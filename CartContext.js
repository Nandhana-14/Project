// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Array to hold ticket details
  const [total, setTotal] = useState(0); // Total price

  // Function to add ticket to the cart
  const addTicket = (ticket) => {
    setCart((prevCart) => [...prevCart, ticket]);
    updateTotal();
  };

  // Function to remove ticket from the cart
  const removeTicket = (ticketId) => {
    setCart((prevCart) => prevCart.filter(ticket => ticket.id !== ticketId));
    updateTotal();
  };

  // Function to calculate total price
  const updateTotal = () => {
    const newTotal = cart.reduce((sum, ticket) => sum + ticket.price, 0);
    setTotal(newTotal);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ cart, total, addTicket, removeTicket, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
