import {createReducer} from "typesafe-actions";
import {TodoAction, TodoSate} from "./types";
import {GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS} from "./actions";

const initialState: TodoSate = {
    todos: {
        loading: false,
        data : null,
        error :  null
    }
}

const todo = createReducer<TodoSate, TodoAction>(initialState, {
    [GET_TODOS]: state => ({
        ...state,
        todos: {
            loading: true,
            data : null,
            error: null
        }
    }),
    [GET_TODOS_SUCCESS]: (state,action) => ({
        ...state,
        todos: {
            loading: false,
            data: action.payload,
            error: null
        }
    }),
    [GET_TODOS_ERROR]: (state, action) => ({
        ...state,
        todos:{
            loading: false,
            data: null,
            error: action.payload
        }
    })
})

export default todo