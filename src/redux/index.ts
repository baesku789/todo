import {combineReducers} from "redux";
import todo from './todo'

const rootReducer = combineReducers({
    todo
})

export default rootReducer;

//root reducer의 반환값 유추
export type RootState = ReturnType<typeof rootReducer>;