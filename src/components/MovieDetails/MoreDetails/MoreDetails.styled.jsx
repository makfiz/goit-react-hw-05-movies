import styled from "styled-components";
import { Link } from "react-router-dom";

export const HolderMoreDetails = styled.div`
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
