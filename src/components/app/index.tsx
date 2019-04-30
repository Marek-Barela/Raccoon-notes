import React, { FunctionComponent } from 'react';
import Header from '../header';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`
const App: FunctionComponent<{}> = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
