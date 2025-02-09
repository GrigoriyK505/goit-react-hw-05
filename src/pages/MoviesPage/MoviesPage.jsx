import styles from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';

function MoviesPage() {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(SearchParams.get('q') || '');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      searchMovies(query).then(setMovies).then(() => {
        setLoading(false);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    searchMovies(query).then(setMovies).then(() => {
      setLoading(false);
    });
    updateSearchParams('q', query);
  };

  const updateSearchParams = (key, value) => {
    const updateParams = new URLSearchParams(SearchParams);
    updateParams.set(key, value);
    setSearchParams(updateParams);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <div className={styles.movieList}>
        <MovieList movies={movies} loading={loading} />
      </div>
    </div>
  );
}

export default MoviesPage;
