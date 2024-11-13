import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css'; // Import your CSS file

const MovieList = () => {
  return (
<div className="movie-list-container">
      <header className="movie-list-header">
        <h1 style={{ color: 'white' }}>Movie List</h1>
      </header>
<div className="movie-grid">
        <div className="movie-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7j82lmabPr-a2IPiSR1F5Njey2x9ci9pIkA&s" alt="Amaran" className="movie-card-image" />
          <div className="movie-info">
            <h2 className="movie-card-title">Amaran</h2>
            <Link to="/booking/1">
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
<div className="movie-card">
          <img src="https://trendingtadka.co.in/wp-content/uploads/2024/09/GOAT-first-day-collection.jpg" alt="Goat" className="movie-card-image" />
          <div className="movie-info">
            <h2 className="movie-card-title">Goat</h2>
            <Link to="/booking/2">
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
<div className="movie-card">
          <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364503-1701678655.jpg" alt="Hi Naana" className="movie-card-image" />
          <div className="movie-info">
            <h2 className="movie-card-title">Hi Naana</h2>
            <Link to="/booking/3">
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
<div className="movie-card">
          <img src="https://m.media-amazon.com/images/M/MV5BOTI0ZDM0ZDktZWMyMy00YWJjLWIzY2YtNzFkN2ZiMWNiNzk1XkEyXkFqcGdeQXVyMTU0ODI1NTA2" alt="Maharaja" className="movie-card-image" />
          <div className="movie-info">
            <h2 className="movie-card-title">Maharaja</h2>
            <Link to="/booking/4">
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
