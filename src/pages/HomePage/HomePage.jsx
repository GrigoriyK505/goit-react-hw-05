import styles from './HomePage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/api';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies().then(setMovies).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
      <div className={styles.movieList}>
        <MovieList movies={movies} loading={loading} />
      </div>
    </div>
  );
}

export default HomePage;
