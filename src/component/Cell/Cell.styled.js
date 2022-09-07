import styled from "styled-components";

export const Container = styled.li`
    padding: 0 4px;
    background: ${({ colorDay, anotherMonth }) =>
        colorDay && anotherMonth === 0 ? "#edf8eb" : "white"};
    color: ${({ anotherMonth }) =>
        anotherMonth === 0 ? "black" : "lightgray"};
`;

export const BackDrop = styled.div`
	position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
	visibility: ${({ dropdown }) => (dropdown ? "" : "hidden")};
	}`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

export const Event = styled.li`
    margin-top: 2px;
    font-size: 14px;
    background-color: lightgray;
    cursor: pointer;
`;
