import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'; 

const MovieDetails = () => {
  const { id } = useParams(); //Retrieve the movie ID from the URL
  const [movie, setMovie] = useState(null); //State to store movie details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Simulate fetching movie data (replace with actual API call if needed)
  useEffect(() => {
    // Simulate an API call to fetch movie details
    const fetchMovieDetails = async () => {
      try {
        // Simulate fetching data (replace with real API request)
        const movieData = {
          id,
          title: `Movie Title ${id}`,
          description: 'A great movie with lots of action and drama.',
          director: 'Director Name',
          releaseDate: '2023-01-01',
        };
        setMovie(movieData); // Set the movie details in the state
        setLoading(false);   // Stop loading
      } catch (error) {
        setError('Failed to load movie details.');
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movie-details-container">
      <h1>{movie.title}</h1>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
