// UserContext.js
import React, { createContext, useState } from 'react';

// Create UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold user details

  // Function to log in a user
  const login = (userData) => {
    setUser(userData); // Set the user state
    localStorage.setItem('user', JSON.stringify(userData)); // Store in local storage
  };

  // Function to log out the user
  const logout = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem('user'); // Remove from local storage
  };

  // Function to check if a user is logged in
  const isLoggedIn = () => {
    return user !== null;
  };

  // Function to get current user
  const getCurrentUser = () => {
    return user ? user : JSON.parse(localStorage.getItem('user'));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn, getCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
