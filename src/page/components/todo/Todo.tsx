import * as React from "react";
import styles from './todo.scss'
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'

interface todoState {
    id: string
    text: string,
    date : string,
    done : boolean
}

const Todo = () => {
    const [todoList, setTodoList] = useState<todoState[]>([]);
    const [text, setText] = useState("");

    const date = new Date();
    const getMonthDay = `${date.getMonth() + 1}/${date.getDate()}`

    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) : void => {
        if(e.key === "Enter"){
            setTodoList(state => [...state, {id: uuidv4(), text: text, date: getMonthDay, done: false}])
            setText("")
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setText(value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>To Do List</h1>
            </div>

            <div className={styles.scrollBox}>
                <input
                    className={styles.input}
                    type="text"
                    value={text}
                    placeholder={"할 일을 입력하세요."}
                    onKeyPress={(e) => addTodo(e)}
                    onChange={e => onChange(e)}
                />
                {
                    todoList.map((todo) => {
                      return (
                          <div
                              className={styles.todoList}
                              key={todo?.id}
                          >
                              <div>{todo.text}</div>
                              <div className={styles.date}>{todo?.date}</div>
                          </div>
                      )
                    })
                }
                {/*<div className={cn(styles.plus_circle, inputDisplay && styles.x_btn)} onClick={() => setInputDisplay(!inputDisplay)}>*/}
                {/*    <div className={styles.plus_1}/>*/}
                {/*    <div className={styles.plus_2}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Todo;