import styled from "styled-components";
import { ReactComponent as svgClose } from "style/icons/close.svg";
import { ReactComponent as svgDelete } from "style/icons/delete.svg";

export const Container = styled.form`
    position: absolute;
    top: ${({ component }) => (component === "Cell" ? "50%" : "150%")};
    left: 50%;
    transform: ${({ component }) =>
        component === "Cell" ? "translate(-50%, -50%)" : "translate(-50%, 0)"};
    width: 400px;
    height: 600px;
    padding: 20px;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BoxData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 250px;
    border-bottom: 2px solid lightgray;
`;

export const Header = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const IconClose = styled(svgClose)`
    fill: gray;
    cursor: pointer;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 16px 0 8px;
    font-size: 14px;
    color: lightgray;
`;

export const LabelData = styled.label`
    display: flex;
    flex-direction: column;
    margin: 36px 0 8px;
    font-size: 14px;
    color: lightgray;
`;

export const Input = styled.input`
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid lightgray;

    ::placeholder {
        color: lightgray;
        font-size: 16px;
        font-weight: 500;
    }
`;

export const InputDate = styled.input`
    width: 200px;
    padding-top: 4px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid lightgray;
`;

export const InputTime = styled.input`
    width: 80px;
    padding-top: 4px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid lightgray;
`;

export const Textarea = styled.textarea`
    padding: 8px 0;
    border: none;
    border-bottom: 1px solid lightgray;
`;

export const IconDelete = styled(svgDelete)`
    margin-left: auto;
    padding: 8px 10px;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
`;

export const ButtonSave = styled.button`
    margin: 20px;
    padding: 8px 10px;
    float: right;
    color: gray;
    background-color: lightgray;
    border: 1px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
`;
