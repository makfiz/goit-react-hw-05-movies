import { useEffect, useState } from "react"
import {useSearchParams } from "react-router-dom"
import {Suspense } from "react";

import { fetchSearchMovie} from "ApiServise/api.themoviedb";

import { Form} from 'components/Form/Form'
import MoviesList from "components/MoviesList/MoviesList"

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [responseEmpty, setResponseEmpty] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchedMovie = searchParams.get("query") ?? ""
    
    

    useEffect(() => {
        if (!searchedMovie) return
        const controller = new AbortController();
        async function getMoviesById() {
            
            try {
                const response = await fetchSearchMovie(searchedMovie, controller.signal)
                
                console.log(response)
                setMovies(response)

                if (response.length === 0) {
                    setResponseEmpty(true)
                }
                
            } catch (e) {
                console.error(e)
          }    
       }
       getMoviesById()
       return () => controller.abort()
    },[searchedMovie])


    const queryHundler = (value) => {
        console.log(value)
        setSearchParams(value !== '' ? {query:value.trim()} : {})
       
    }

    return (
        <>   <Suspense fallback={<div>Loading subpage...</div>}>
            <Form onChange={queryHundler} searchedMovie={searchedMovie} responseEmpty={responseEmpty} />
            <MoviesList Movies={movies}/>
            {responseEmpty && <h1 style={{ textAlign: "center" }}>No results were found for {searchedMovie}</h1>}
            </Suspense>
        </>
    )
}

export default Movies