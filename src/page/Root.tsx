import * as React from "react";
import {Home} from "./components/Home";

export const Root = () => {
    const name = "yechan";
    const age = 25

    return (
        <Home name={name} age={age}/>
    )
}
