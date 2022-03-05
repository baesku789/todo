import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./App";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import storage from "redux-persist/lib/storage";
import {createLogger} from "redux-logger";
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from "./redux";
import {applyMiddleware, createStore} from "redux";

const persistConfig = {
    key: 'root',
    storage,
}

const logger = createLogger()

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(logger))
let persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));