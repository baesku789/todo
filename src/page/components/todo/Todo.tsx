import * as React from "react";
import styles from './todo.scss'
import {Link} from "react-router-dom";

const Todo = () => {
    const todoList = [
        {
            name: "yechan",
            title : "할일 1",
            text: "자기 전에 영양제1 챙겨먹기"
        },
        {
            name: "yechan",
            title : "할일 2",
            text: "자기 전에 영양제2 챙겨먹기"
        },
        {
            name: "yechan",
            title : "할일 3",
            text: "자기 전에 영양제3 챙겨먹기"
        }
    ]

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
                              key={todo.title}
                          >
                              {todo.title}
                          </div>
                      )
                    })
                }
                <div className={styles.plus_circle}>
                    <Link to={'/post'}
                    ></Link>
                    <div className={styles.plus_1}></div>
                    <div className={styles.plus_2}></div>
                </div>
            </div>
        </div>
    )
}
export default Todo;