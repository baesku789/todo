//todo page에서 사용되는 type 선언
export type TodoProps = {
    id: string,
    text: string,
    done : boolean
}

export type TodoStateProps = TodoProps[];