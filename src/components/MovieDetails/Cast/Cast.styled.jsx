import styled from "styled-components";

export const CastList = styled.ul`
 display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px 0 0 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`
export const Poster = styled.img`
    width: 150px;
    margin-bottom:10px;
`
export const ListItem = styled.li`
    display:flex;
    flex-direction:column;
    justify-content:center;
`