import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check local storage first
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      alert('Login successful!');
      // Navigate to the movie list page
      navigate('/movielist'); // Navigate to the movie list page
    } else {
      // If not found, check the db.json
      try {
        const response = await fetch('http://localhost:3001/users');
        const usersFromDB = await response.json();
        const userFromDB = usersFromDB.find((u) => u.email === email && u.password === password);

        if (userFromDB) {
          alert('Login successful!');
          // Navigate to the movie list page
          navigate('/movielist'); // Navigate to the movie list page
        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
