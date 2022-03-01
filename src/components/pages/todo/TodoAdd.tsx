import * as React from "react";
import styles from "@Components/todo/todo.scss";

type TodoAddProps = {
    text: string,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    addTodo : (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TodoAdd = ({text, onChange, addTodo} : TodoAddProps) => {

    return (
        <input
            className={styles.input}
            type="text"
            value={text}
            placeholder={"할 일을 입력하세요."}
            onKeyPress={(e) => addTodo(e)}
            onChange={e => onChange(e)}
        />
    )
}
export default TodoAdd;