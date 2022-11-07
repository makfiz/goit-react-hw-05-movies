import { useEffect, useState } from "react"
import { useParams} from "react-router-dom";
import { fetchMovieReviewsById } from "ApiServise/api.themoviedb";
import {ReviewsList} from './Reviews.styled'

const Reviews = () => {
    const [reviews, setReviews] = useState(null)
    const { movieId } = useParams()
    console.log(movieId)
    useEffect(() => {
        async function getReviews() {
            try {
                const response = await fetchMovieReviewsById(movieId)
                setReviews(response.results)
                
            } catch (e) {
                console.error(e)
          }    
       }
       getReviews()
    }, [movieId]) 
    
    if (reviews && reviews.length === 0) return <span> We dont have any reviews for this movie.</span>
    return (
        <ReviewsList>
             {reviews && reviews.map(r => {

                const {id, author, content} = r
                // let image =
                //     profile_path === null
                //     ? 'https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found'
                //         : `https://image.tmdb.org/t/p/w400/${profile_path}`;
                            
               return (
                
                <li key={id}>
                       <h3>Author: {author}</h3>
                       <div>{content}</div>
                </li>) 
            })} 
            
        </ReviewsList>
    )
}


export default Reviews