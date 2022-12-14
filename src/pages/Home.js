import { useEffect, useState } from "react"
import Pagination from "components/Pagination/Pagination"

import MoviesList from "components/MoviesList/MoviesList"
import { fetchTrendingMovies } from "ApiServise/api.themoviedb"



const Home = () => {
    const [page, setPage] = useState(1);
    const [trMovies, setTrMovies] = useState([])
  

    useEffect(() => {
        const controller = new AbortController();
        async function getMovies() {
            try {
                const response = await fetchTrendingMovies(page, controller.signal)
                setTrMovies(() => [...response.results])
                
            } catch (e) {
                console.error(e)
          }    
       }
        getMovies()
        return () => controller.abort()
    },[page]   
    )
    
    
    const handleChange = (e, p) => {
        setPage(p);
    };

          
    return (
        <>
            <Pagination page={page} onChange={handleChange} />
            <MoviesList Movies={trMovies}  />
            <Pagination page={page} onChange={handleChange}/>
        </>
        
    )
}

export default Home