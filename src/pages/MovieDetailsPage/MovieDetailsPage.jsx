import React, { useEffect, useState } from 'react'
import BackButton from '../../components/BackButton/BackButton'
import { Link, Outlet, useParams } from 'react-router-dom';
import {fetchMovieDetails} from '../../services/api.js'

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId).then(setMovie).then(() => setLoading(false));
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>
  }

  return movie ? (
    <div>
      <BackButton />
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="{movie.title}" />
        <h1>{movie.title}</h1>
        <p>User Score:{Math.round(movie.vote_average * 10)}%</p>
        <p>{movie.overview}</p>
        <ul>
          {movie.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </div>
      <Outlet />
  
    </div>
  ) : (<p>Not found</p>);
}

export default MovieDetailsPage