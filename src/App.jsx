import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../src/pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../src/pages/MovieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../src/pages/NotFoundPage/NotFoundPage'));
const MovieCast = lazy(() => import('../src/components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../src/components/MovieReviews/MovieReviews'));

function App() {

  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
