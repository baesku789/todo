import * as React from "react";
import styles from './todo.scss'
import {useState} from "react";
import cn from 'classnames'
import {touchStart, touchEnd} from "../../../common/hooks/longClick";
import {getFormattedToday} from "../../../common/utils/date";
import {useDispatch, useSelector} from "react-redux";
import {create, remove, toggle} from "../../../redux/todo";
import {RootState} from "../../../redux";

const Todo = () => {
    const [text, setText] = useState("");
    const [isLongClick, setIsLongClick] = useState(false);
    const dispatch = useDispatch();

    const todoList = useSelector((state: RootState) => state.todo)

    const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) : void => {
        if(e.key === "Enter"){
            dispatch(create(text))
            setText("")
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setText(value)
    }

    const onToggle = (id : string) => {
        dispatch(toggle(id))
    }

    const onRemove = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if(isLongClick){
            dispatch(remove(id))
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 style={{"margin": "0"}}>To Do List</h1>
            </div>
            <div>
                <h2 className={styles.today}>{getFormattedToday()}</h2>
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
                              {
                                  isLongClick ?
                                      <div
                                          className={styles.x_btn_box}
                                          onClick={(e) => onRemove(e, todo.id)}
                                      >
                                          <div className={styles.x_btn1}/>
                                          <div className={styles.x_btn2}/>
                                      </div>
                                      :
                                      <div className={cn(styles.check_box, todo.done && styles.done)}>
                                          <div className={styles.check1}/>
                                          <div className={styles.check2}/>
                                      </div>
                              }
                          </div>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default Todo;