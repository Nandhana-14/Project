import React, { useState } from 'react';
import './AdminPanel.css'; // Import CSS for AdminPanel.js

const AdminPanel = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', director: '', releaseDate: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  // Add a new movie
  const addMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', director: '', releaseDate: '' }); // Reset form after adding
  };

  // Delete a movie
  const deleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div className="admin-panel container">
      <h1>Admin Panel</h1>
      
      {/* Section for adding a new movie */}
      <section className="add-movie-section">
        <h2>Add New Movie</h2>
        <form className="movie-form" onSubmit={addMovie}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Director:
            <input
              type="text"
              name="director"
              value={newMovie.director}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Release Date:
            <input
              type="date"
              name="releaseDate"
              value={newMovie.releaseDate}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </section>

      {/* Section for displaying the list of movies */}
      <section className="movie-list-section">
        <h2>Movie List</h2>
        {movies.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          <ul className="movie-list">
            {movies.map((movie, index) => (
              <li key={index} className="movie-item">
                <div className="movie-details">
                  <strong>{movie.title}</strong> directed by {movie.director} (Released: {movie.releaseDate})
                </div>
                <button onClick={() => deleteMovie(index)} className="delete-button">Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminPanel;
