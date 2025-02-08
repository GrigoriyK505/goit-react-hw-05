import React, { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';

function MoviesPage() {
  const [SearchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(SearchParams.get("q") || "");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    searchMovies(query).then(setMovies).then(() => { setLoading(false) });
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    searchMovies(query).then(setMovies).then(() => { setLoading(false) });
    updateSearchParams("q", query);
  };

  const updateSearchParams = (key, value) => {
    const updateParams = new URLSearchParams(SearchParams);
    updateParams.set(key, value);
    setSearchParams(updateParams);
  };



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button type='submit'>Search</button>      
      </form>
      <MovieList movies={movies} loading={loading} />
    </div>
  )
}

export default MoviesPage