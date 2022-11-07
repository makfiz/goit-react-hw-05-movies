import styled from "styled-components";

export const ReviewsList = styled.ul`
    li {
        margin:10px 0;
        border:${p => p.theme.borders.profile};
        padding: 10px;
    }

    li:nth-child(2n+2) {
    background-color:#f2f3f5;
  }
`