import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackBtn = styled(Link)`
    margin: 10px 0;
    text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
  border: 2px solid red;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: red;
  transition: .2s ease-in-out;

    &:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
    }

    &:hover {
    background: red;
    color: #fff;
    }

    &:hover:before {
    left: 150px;
    transition: .5s ease-in-out;
    }
`
export const ContentionWrapper = styled.div`
    display:flex;
`

export const Poster = styled.img`
    width: 250px;
`

export const Description = styled.div`
    margin-left:30px;
`
export const AddInfoPanel = styled.div`
    margin-top:30px;
    margin-bottom:10px;
    border-bottom:${p => p.theme.borders.profile};
    border-top:${p => p.theme.borders.profile};
    display:flex;
    flex-direction:column;
    padding-bottom:20px;
`
export const StyledLinks = styled(Link)`
    margin-left:30px;
    margin-top:10px;
`
