import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  height: 320px;
  width: 235px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr repeat(5);
  margin: auto;
`;

export const Screen = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

export const AcArea = styled.div`
  height: 80px;
  width: 235px;
  border-radius: 5px;
  display: grid;

  button {
    background-color: #4357692d;
    border-style: none;

    &:hover {
      background-color: #4357;
    }
  }
`;

export const ACButton = styled.button`
  background-color: #4357692d;
  border-style: none;

  &:hover {
    background-color: #4357;
  }
`;

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
  
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cc441f;
    background-image: linear-gradient(315deg, #cc441f 0%, #c2c738 74%);
  }
`;
