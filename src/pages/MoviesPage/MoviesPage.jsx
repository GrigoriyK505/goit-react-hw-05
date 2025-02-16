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
  const q = SearchParams.get('q') || "";

  useEffect(() => {
    if (q) {
      setLoading(true);
      searchMovies(q).then(setMovies).then(() => {
        setLoading(false);
      });
    }
  }, [q]);

 const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: query });
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
