import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Movie Ticket Booking</h1>
        <nav className="navbar">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/admin" className="nav-link">Admin Panel</Link>
        </nav>
      </header>
      <main>
        <h2>Discover Your Favorite Movies</h2>
        <p>Book tickets for the latest films, enjoy a night out, and make unforgettable memories!</p>
      </main>
    </div>
  );
};

export default Home;
