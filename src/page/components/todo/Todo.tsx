import * as React from "react";
import styles from './todo.scss'
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'

interface todoState {
    id: string
    text: string,
    date : number
}

const Todo = () => {
    const [todoList, setTodoList] = useState<todoState[]>([]);

    const date = new Date();

    const addTodo = (text: string) => {
        setTodoList(state => [...state, {text : text, date: date.getDate(), id: uuidv4()}])
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>To Do List</h1>
            </div>

            <div className={styles.scrollBox}>
                {
                    todoList.map((todo) => {
                      return (
                          <div
                              className={styles.todoList}
                              key={todo?.id}
                          >
                              <div>{todo?.text}</div>
                              <div>{todo?.date}</div>
                          </div>
                      )
                    })
                }
                <div className={styles.plus_circle} onClick={() => addTodo("aa")}>
                    <div className={styles.plus_1}/>
                    <div className={styles.plus_2}/>
                </div>
            </div>
        </div>
    )
}

export default Todo;