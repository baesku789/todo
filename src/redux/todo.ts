import {v4 as uuidv4} from 'uuid'
import {ActionType, createAction, createReducer} from "typesafe-actions";

//액션 생성 함수 선언
export const create = createAction('redux/CREATE')<string>();
export const toggle = createAction('redux/TOGGLE')<string>();
export const remove = createAction('redux/REMOVE')<string>();

//모든 액션 객체들에 대한 타입을 준비
const actions = {
    create,
    toggle,
    remove
}

// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론
type TodoAction  = ActionType<typeof actions>

export type Todo = {
    id: string,
    text: string,
    done : boolean
}

export type TodoState = Todo[];

const initialState = [
    {
        id: uuidv4(),
        text: "할 일1",
        done: false
    }
]

const todoReducer = createReducer<TodoState, TodoAction>(initialState)
    .handleAction(create, (state, action) => state.concat({
        id: uuidv4(),
        text: action.payload,
        done: false
    }))
    .handleAction(toggle, (state, action) => state.map((todo) => todo.id === action.payload ? {...todo, done: !todo.done}: todo))
    .handleAction(remove, (state, action) => state.filter((todo) => todo.id !== action.payload))

export default todoReducer;