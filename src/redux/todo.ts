import {v4 as uuidv4} from 'uuid'

//as const로 지정하면 type이 string이 아닌 'redux/*'로 잡힘
const CREATE = 'redux/CREATE' as const;
const TOGGLE = 'redux/TOGGLE' as const;
const REMOVE = 'redux/REMOVE' as const;

//액션 생성 함수 선언
export const create = (text: string) => ({
    type: CREATE,
    payload: {
        text,
    }
})

export const toggle = (id: string) => ({
    type: TOGGLE,
    payload: id
})

export const remove = (id: string) => ({
    type: REMOVE,
    payload: id
})

//모든 액션 객체들에 대한 타입을 준비
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론
type TodoAction =
    | ReturnType<typeof create>
    | ReturnType<typeof toggle>
    | ReturnType<typeof remove>

type Todo = {
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

function todo(
    state : TodoState = initialState,
    action : TodoAction
){
    switch (action.type){
        case "redux/CREATE":
            return state.concat({
                id: uuidv4(),
                text: action.payload.text,
                done: false
            });
        case "redux/TOGGLE":
            return state.map((todo) => (
                todo.id === action.payload ? {...todo, done: !todo.done} : todo
            ))
        case "redux/REMOVE":
            return state.filter((todo) => todo.id !== action.payload)
        default :
            return state;
    }
}

export default todo;