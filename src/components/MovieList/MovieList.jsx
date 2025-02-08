import { Link, useLocation } from "react-router-dom";

function MovieList({ movies, loading }) {
    const location = useLocation();
    if (loading) {
        return <p>Loading...</p>
    }
  return (
      <div>
          {
              movies.length > 0 ? (<ul>
              {movies.map(({id, title}) => (
                  <li key={id}>
                      <Link state={{ prevLocation: location.pathname + location.search, }}
                          to={`/movies/${id}`}>
                      {title}</Link>
                  </li>
              ))}
        </ul>) : <p>No movies</p>
        }
    </div >
    )
}

export default MovieList