import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from 'pages/Home'
import SharedLayout  from "components/SharedLayout/SharedLayout";
// import MovieDetails from "pages/MovieDetails";
// import Cast from 'components/MovieDetails/Cast/Cast'
// import Reviews from 'components/MovieDetails/Reviews/Reviews'
// import NotFound from "pages/NotFound404";


const Movies = lazy(() => import('pages/Movies'));
// const Movies = createAsyncComponent('pages/Movies');
const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound404'));
const Cast = lazy(() => import('components/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('components/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
        </Route>  
        </Routes>
        </Suspense>
    </>
  );
};
