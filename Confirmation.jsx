import React from 'react';
import { useParams } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const { id } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const seats = urlParams.get('seats');

  return (
    <div className="confirmation-container">
      <h2>Booking Confirmation</h2>
      <p>Thank you for your booking!</p>
      <p>Movie: {id}</p>
      <p>Number of Seats: {seats}</p>
      <p>Your booking has been confirmed!</p>
    </div>
  );
};

export default Confirmation;
