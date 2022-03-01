import * as React from "react";
import {useState} from "react";
import styles from './todo.scss'
import {getFormattedToday} from "../../../common/utils/date";
import {useDispatch, useSelector} from "react-redux";
import {remove, toggle} from "../../../redux/todo";
import {RootState} from "../../../redux";
import TodoList from "@Components/todo/TodoList";
import TodoAdd from "@Components/todo/TodoAdd";

const Todo = () => {

    const [isLongClick, setIsLongClick] = useState(false); //1초 이상 클릭 후
    const dispatch = useDispatch();

    const todos = useSelector((state: RootState) => state.todos)



    const onToggle = (id : string) => {
        dispatch(toggle(id))
    }

    const onRemove = (e: React.MouseEvent, id: string) : void => {
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
                <TodoAdd/>
                <TodoList
                    todos={todos}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    isLongClick={isLongClick}
                    setIsLongClick={setIsLongClick}
                />
            </div>
        </div>
    )
}

export default Todo;