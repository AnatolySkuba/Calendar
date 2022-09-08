import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin-left: auto;
    margin-right: 55px;
`;

export const Border = styled.div`
    position: absolute;
    right: 2px;
    width: 30px;
    height: 20px;
    border: 2px solid var(--main-color);
    border-radius: 3px;
    cursor: pointer;
    pointer-events: none;
`;

export const InputMonth = styled.input`
    top: 2px;
    right: 8px;
    position: absolute;
    margin-left: 10px;
    width: 45px;
    border: none;
    :focus-visible {
        outline: none;
    }
`;
