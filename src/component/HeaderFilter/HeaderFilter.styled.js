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
    display: inline-block;
    align-items: center;
    color: currentColor;
    text-decoration: none;
    font-size: 32px;
    ::after {
        display: inline-block;
        content: "";
        width: 59px;
        height: 35px;
        background-size: contain;
        background-color: url("style/icons/calendar.png");
    }
`;
