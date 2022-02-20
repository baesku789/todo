import * as React from "react";
import {Root} from "./page/Root";
import {BrowserRouter} from "react-router-dom";

export const App = () => {
    return (
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    )
}
