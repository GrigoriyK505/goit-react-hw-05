import React, { useEffect, useState } from 'react'
import {fetchMovieCast} from '../../services/api'
import { useParams } from 'react-router-dom';

function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      fetchMovieCast(movieId).then(setCast).then(() => { setLoading(false) });
  }, [movieId]);
  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h2>Actors</h2>
      {cast.length > 0 ? (<ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="{actor.name}" />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>) : ( <p>No Actors</p>)
      }
    </div>
  )
}

export default MovieCast