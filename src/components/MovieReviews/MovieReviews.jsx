import React, { useEffect, useState } from 'react'
import {fetchMovieReviews} from '../../services/api'
import { useParams } from 'react-router-dom';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : ( <p>No Reviews</p>)}
    </div>
  )
}

export default MovieReviews