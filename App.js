import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Booking from './components/Booking';
import Payment from './components/Payment'; // Import Payment component
import Confirmation from './components/Confirmation'; // Import Confirmation component
import Profile from './components/Profile';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes for each component */}
        <Route path="/" element={<Home />} /> {/* Default Home page shows movie list */}
        <Route path="/movielist" element={<MovieList />} /> {/* Default Home page shows movie list */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        <Route path="/movie/:id" element={<MovieDetails />} /> {/* Movie details page with movie ID */}
        <Route path="/booking/:id" element={<Booking />} /> {/* Booking page with movie ID */}
        <Route path="/payment/:id" element={<Payment />} /> {/* Payment page with movie ID */}
        <Route path="/confirmation/:id" element={<Confirmation />} /> {/* Confirmation page */}
        <Route path="/profile" element={<Profile />} /> {/* Profile page */}
        <Route path="/admin" element={<AdminPanel />} /> {/* Admin panel */}
      </Routes>
    </Router>
  );
};

export default App;

