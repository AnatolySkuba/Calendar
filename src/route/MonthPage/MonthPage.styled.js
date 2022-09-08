import styled from "styled-components";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(
        ${({ quantityCells }) => (quantityCells === 35 ? 5 : 6)},
        125px
    );
    grid-gap: 1px;
    margin-top: 15px;
    background: var(--main-color);
    border: 1px solid var(--main-color);
`;
