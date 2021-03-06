import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #E5E5E5;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
