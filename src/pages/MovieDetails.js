import { useEffect, useState } from "react"
import { useParams, Outlet, useLocation } from "react-router-dom";
import { MovieDetails as Details }  from "components/MovieDetails/MovieDetails"
import MoreDetails from "components/MovieDetails/MoreDetails/MoreDetails"
import { fetchSearchMovieById } from "ApiServise/api.themoviedb";

const MovieDetails = () => {

    const [movieInfo, setmovieInfo] = useState(null)
    const { movieId } = useParams()
    const location = useLocation()

    useEffect(() => {
        async function getMoviesById() {
            try {
                const response = await fetchSearchMovieById(movieId)
                setmovieInfo(response)
                
            } catch (e) {
                console.error(e)
          }    
       }
       getMoviesById()
    },[movieId])   
        
    
    return (
        
            <>
            <Details movie={movieInfo} location={location}/>
            <MoreDetails location={location}/>
            <div>
                <Outlet/>
            </div>
            </>
    )
}


export default MovieDetails