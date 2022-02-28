import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./redux";

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));