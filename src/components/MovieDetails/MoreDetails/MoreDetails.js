import {HolderMoreDetails, StyledLinks} from "./MoreDetails.styled"

const MoreDetails = ({location}) => {
    return (
        <HolderMoreDetails>
            <span>Additional information</span>
            <StyledLinks to={'cast'} state={{ from: location }}>Cast</StyledLinks>
            <StyledLinks to={'reviews'} state={{ from: location }}>Reviews</StyledLinks>
        </HolderMoreDetails>
    )
}

export default MoreDetails