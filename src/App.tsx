import * as React from "react";
import {Root} from "./components/Root";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

export const App = () => {
    const GlobalStyles = createGlobalStyle`
      *{
        box-sizing: border-box;
      }
      body{
        margin: 0;
        height: 100vh;
        font-size: 13px;
      }
      #root{
        height: 100%
      }
      input[type=text] { 
        height : 30px
      }
    `

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Root/>
        </BrowserRouter>
    )
}
