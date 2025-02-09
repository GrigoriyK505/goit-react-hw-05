import styles from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/api';
import { useParams } from 'react-router-dom';

function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovieCast(movieId)
      .then(setCast)
      .then(() => setLoading(false));
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Actors</h2>
      {cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={styles.item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className={styles.image}
              />
              <h3 className={styles.name}>{actor.name}</h3>
              <p className={styles.character}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Actors</p>
      )}
    </div>
  );
}

export default MovieCast;
