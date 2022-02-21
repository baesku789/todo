import * as React from "react";
import {Root} from "./page/Root";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";

export const App = () => {
    const GlobalStyles = createGlobalStyle`
      body{
        box-sizing: border-box
      }
    `

    return (
        <BrowserRouter>
            <GlobalStyles/>
            <Root/>
        </BrowserRouter>
    )
}
