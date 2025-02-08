import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList'
import {fetchTrendingMovies} from '../../services/api'

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies().then(setMovies).then(() => { setLoading(false) });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} loading={loading} />
    </div>
  )
}

export default HomePage