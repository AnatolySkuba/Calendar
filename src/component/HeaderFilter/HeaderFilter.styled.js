import styled from "styled-components";
import { ReactComponent as svg } from "style/icons/calendar.svg";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin-left: auto;
`;

export const DatePicker = styled(svg)`
    margin-left: 10px;
    border: 2px solid lightgray;
    border-radius: 3px;
    cursor: pointer;
`;
