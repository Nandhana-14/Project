import React from 'react';
import { useParams } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const { id } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const seats = urlParams.get('seats');

  const handlePayment = () => {
    // Simulate payment logic (you could integrate a real payment gateway here)
    alert(`Payment successful for Movie ${id}, Seats: ${seats}`);
    
    // Navigate to confirmation page after payment
    window.location.href = `/confirmation/${id}?seats=${seats}`;
  };

  return (
    <div className="payment-container">
      <h2>Payment for Movie {id}</h2>
      <p>Number of Seats: {seats}</p>
      <p>Total Amount: ${(seats * 10).toFixed(2)} (Assuming $10 per seat)</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
