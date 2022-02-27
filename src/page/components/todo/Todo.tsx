import * as React from "react";
import styles from './todo.scss'
import {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import cn from 'classnames'
import {touchStart, touchEnd} from "../../../common/hooks/longClick";

interface todoState {
    id: string,
    text: string,
    date : string,
    done : boolean
}

const Todo = () => {
    const [todoList, setTodoList] = useState<todoState[]>([
        {
            id: uuidv4(),
            text: "영양제 먹기",
            date : "2/27",
            done : false
        },
        {
            id: uuidv4(),
            text: "세수하기",
            date : "2/27",
            done : false
        }
    ]);
    const [text, setText] = useState("");
    const [isLongClick, setIsLongClick] = useState(false);

    console.log(`long click ${isLongClick}`)

    const date = new Date();
    const getMonthDay = `${date.getMonth() + 1}/${date.getDate()}`

    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) : void => {
        if(e.key === "Enter"){
            const todo = {
                id: uuidv4(),
                text: text,
                date: getMonthDay,
                done: false
            }
            setTodoList(state => [...state, todo])
            setText("")
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setText(value)
    }

    const onToggle = (id : string) => {
        setTodoList(
            todoList.map((todo) => (
                todo.id === id ? {...todo, done: !todo.done} : todo
            ))
        )
    }

    const onRemove = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if(isLongClick){
            console.log(`todo ${JSON.stringify(todoList)}`)
            setTodoList(todoList.filter((todo) => todo.id !== id))
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 style={{"marginTop": "0"}}>To Do List</h1>
            </div>
            <div className={styles.scrollBox} onClick={() => setIsLongClick(false)}>
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
                              onClick={() => onToggle(todo?.id)}
                              onTouchStart={() => touchStart()}
                              onTouchEnd={() => touchEnd(setIsLongClick)}
                          >
                              <div>{todo.text}</div>
                              <div
                                  className={cn(styles.check_box, todo.done && styles.done, isLongClick && styles.remove)}
                                  onClick={(e) => onRemove(e, todo.id)}
                              >
                                  <div className={styles.check1}/>
                                  <div className={styles.check2}/>
                              </div>
                          </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default Todo;