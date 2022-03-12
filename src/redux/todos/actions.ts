import {createAsyncAction} from "typesafe-actions";
import {AxiosError} from "axios";
import {TodoSate} from "./types";

export const GET_TODOS = 'todos/GET_TODOS'
export const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS'
export const GET_TODOS_ERROR = 'todos/GET_TODOS_ERROR'

export const getTodosAsync = createAsyncAction(
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR
)<undefined, TodoSate, AxiosError>()