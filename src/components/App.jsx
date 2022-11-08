import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Home from 'pages/Home'
import SharedLayout  from "components/SharedLayout/SharedLayout";
// import MovieDetails from "pages/MovieDetails";
// import Cast from 'components/MovieDetails/Cast/Cast'
// import Reviews from 'components/MovieDetails/Reviews/Reviews'
// import NotFound from "pages/NotFound404";

const createAsyncComponent = (path) => lazy(() => import(path));

const Movies = createAsyncComponent('../pages/Movies');
// const Movies = createAsyncComponent('pages/Movies');
const Home = createAsyncComponent('../pages/Home');
const MovieDetails = createAsyncComponent('../pages/MovieDetails');
const NotFound = createAsyncComponent('../pages/NotFound404');
const Cast = createAsyncComponent('components/MovieDetails/Cast/Cast');
const Reviews = createAsyncComponent('components/MovieDetails/Reviews/Reviews');

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
