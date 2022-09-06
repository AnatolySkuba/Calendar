import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${({ colorDay, anotherMonth }) =>
        colorDay && anotherMonth === 0 ? "#edf8eb" : "white"};
    color: ${({ anotherMonth }) =>
        anotherMonth === 0 ? "black" : "lightgray"};
`;

export const Text = styled.p`
    margin-top: 0;
    padding: 0 4px;
    font-size: 14px;
    font-weight: bold;
`;
