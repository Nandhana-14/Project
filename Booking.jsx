import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate
import './Booking.css'; // Import your CSS file

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [seats, setSeats] = useState(1);

  const handleBooking = () => {
    // Redirect to payment page with booking details
    navigate(`/payment/${id}?seats=${seats}`); // Use navigate to redirect
  };

  return (
    <div className="booking-container">
      <div className="booking-form">
        <h2>Booking for Movie {id}</h2>
        <label htmlFor="seats">Number of Seats</label>
        <input
          type="number"
          id="seats"
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
          min="1"
          required
        />
        <button onClick={handleBooking}>Confirm Booking</button>
      </div>
    </div>
  );
};

export default Booking;
