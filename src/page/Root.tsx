import * as React from "react";
import {Home} from "./components/home/Home";
import {Routes, Route} from "react-router-dom";
import {Post} from "./components/post/Post";
import Todo from "./components/todo/Todo";

export const Root = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/todo'} element={<Todo/>}/>
            <Route path={'/post'} element={<Post/>}/>
        </Routes>
    )
}
