import styles from './MovieDetailsPage.module.css';
import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import { fetchMovieDetails } from '../../services/api.js';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/movies');

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId)
      .then(setMovie)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return movie ? (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton backPath={backLinkRef.current} />
      </div>
      <div className={styles.details}>
        <img
          className={styles.poster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.userScore}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
          <p className={styles.overview}>{movie.overview}</p>
          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={styles.genre}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.links}>
        <Link to="cast" className={styles.link}>
          Cast
        </Link>
        <Link to="reviews" className={styles.link}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  ) : (
    <p>Not found</p>
  );
}

export default MovieDetailsPage;
