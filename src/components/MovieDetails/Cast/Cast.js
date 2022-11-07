import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { fetchMovieCreditshById } from "ApiServise/api.themoviedb";

import {CastList, Poster, ListItem } from "./Cast.styled"

const Cast = () => {
    const [cast, setCast] = useState(null)
    const { movieId } = useParams()
    console.log(movieId)
    useEffect(() => {
        async function getCast() {
            try {
                const response = await fetchMovieCreditshById(movieId)
                setCast(response.cast)
                
            } catch (e) {
                console.error(e)
          }    
       }
       getCast()
    }, [movieId]) 
    
    if (!cast) return
    return (
        <CastList>
            {cast && cast.map(c => {

                const {profile_path, name, character} = c
                let image =
                    profile_path === null
                    ? 'https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found'
                        : `https://image.tmdb.org/t/p/w400/${profile_path}`;
                            
               return (
                <ListItem key={name}>
                    <Poster src={image} alt={name} />
                       <span>{name}</span>
                       <span>Character: {character}</span>
                </ListItem>) 
            })}
        </CastList>
    )
}

export default Cast