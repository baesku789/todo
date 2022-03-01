import {combineReducers} from "redux";
import todos from './todo'

const rootReducer = combineReducers({
    todos
})

export default rootReducer;

//root reducer의 반환값 유추
export type RootState = ReturnType<typeof rootReducer>;