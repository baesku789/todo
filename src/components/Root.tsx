import * as React from "react";
import Home from "@Components/home/Home";
import {Routes, Route} from "react-router-dom";
import Todo from "@Components/todo/Todo";
import NotFound from "@Components/notfound/NotFound";

export const Root = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/todo'} element={<Todo/>}/>
            <Route path={'/*'} element={<NotFound/>}/>
        </Routes>
    )
}
