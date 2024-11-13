import React, { useState } from 'react';
import './Signup.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = { username, email, password };

    // Store signup details in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(userDetails);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Send the details to the backend (db.json)
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optional: Clear the input fields
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/movielist')
      alert('Signup successful!');
    } catch (error) {
      console.error('Error saving signup details:', error);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
