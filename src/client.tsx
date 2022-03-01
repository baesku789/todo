import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./redux";
import {createLogger} from "redux-logger";

const logger = createLogger()

const store = createStore(rootReducer,applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));