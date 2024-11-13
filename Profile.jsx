import React from 'react';
import './Profile.css'; // for Profile.js
const Profile = () => {
  // User profile logic
  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, [username]</p>
      <p>Email: [user@example.com]</p>
      <button>Logout</button>
    </div>
  );
};

export default Profile;
