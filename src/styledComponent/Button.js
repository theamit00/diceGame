import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  display: flex;
  min-width: 220px;
  padding: 10px 18px;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 350ms all ease-in-out;

  &:hover{
    background-color: #fff;
    border: 1px solid black;
    color: black;
    transition: 300ms all ease-in-out;
  }

`;

export const OutlineButton = styled(Button)`

    background-color: #fff;
    border: 1px solid black;
    color: black;

    &:hover{
        background-color: #000;
        border: 1px solid transparent;
        color: #fff;
    }

`;