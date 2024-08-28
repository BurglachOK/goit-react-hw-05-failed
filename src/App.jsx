import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;