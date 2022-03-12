import * as actions from './actions'
import {ActionType} from "typesafe-actions";
import {todos} from "../../api/api";

export type TodoAction = ActionType<typeof actions>

export type TodoSate = {
    todos: {
        loading: boolean,
        data : todos | null,
        error : Error | null
    }
}