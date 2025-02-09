import styles from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies, loading }) {
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.listContainer}>
      {movies.length > 0 ? (
        <ul className={styles.list}>
          {movies.map(({ id, title }) => (
            <li key={id} className={styles.item}>
              <Link
                state={{ prevLocation: location.pathname + location.search }}
                to={`/movies/${id}`}
                className={styles.link}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies</p>
      )}
    </div>
  );
}

export default MovieList;
