import styled from "styled-components";

export const Container = styled.li`
    padding: 0 4px;
    background: ${({ colorDay, anotherMonth }) =>
        colorDay && anotherMonth === 0 ? "#edf8eb" : "white"};
    color: ${({ anotherMonth }) =>
        anotherMonth === 0 ? "black" : "var(--main-color)"};
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: bold;
`;
