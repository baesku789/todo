import * as React from "react";
import {Root} from "./page/Root";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

export const App = () => {
    const GlobalStyles = createGlobalStyle`
      body{
        box-sizing: border-box;
      }
      
      .container{
        display: flex;
        flex-direction: column;
        width: 75%;
        margin: 30px auto 0;
        padding: 20px 15px 30px;
        background: #f5f4eb;
      }
    `

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Root/>
        </BrowserRouter>
    )
}
