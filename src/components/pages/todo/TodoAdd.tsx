import * as React from "react";
import styles from "@Components/todo/todo.scss";
import {useState} from "react";
import {create} from "../../../redux/todo";
import {useDispatch} from "react-redux";

const TodoAdd = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch()

    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) : void => {
        if(e.key === "Enter"){
            dispatch(create(text))
            setText("")
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        const {value} = e.target;
        setText(value)
    }

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