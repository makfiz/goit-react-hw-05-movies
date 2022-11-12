import { BackBtn, ContentionWrapper, Poster, Description } from "./MovieDetails.styled"
import MoreDetails from "components/MovieDetails/MoreDetails/MoreDetails"

 export const MovieDetails = ({movie, location}) => {
 
    console.log("ya zarenderilsya")
    if (!movie) return 
    const {title, release_date, vote_average, overview, genres, poster_path } = movie
    
    let image =
        poster_path === null
          ? 'https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found'
            : `https://image.tmdb.org/t/p/w400/${poster_path}`;

    return (
        <>
            <BackBtn to={location?.state?.from ?? "/movies"}>&#9668; Go back</BackBtn>
            <ContentionWrapper>
            <Poster src={image} alt={title} />
            <Description>
                <h1>{title} ({release_date.split('-')[0]})</h1>
                <span>User Score: {Math.round(vote_average*10)}%</span>
                <div>
                    <h2>Overview</h2>
                    <span>{overview}</span>
                </div>
                <div>
                    <h3>Genres</h3>
                    <span>{genres.map(g => `${g.name} `)}</span>
                </div>
            </Description>
            </ContentionWrapper>
            <MoreDetails location={location?.state?.from ?? "/movies"} />
        </>
    )
}

