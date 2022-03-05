import {applyMiddleware, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./redux";
import {createLogger} from "redux-logger";

const persistConfig = {
    key: 'root',
    storage,
}

const logger = createLogger()

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(logger))
    let persistor = persistStore(store)
    return { store, persistor }
}