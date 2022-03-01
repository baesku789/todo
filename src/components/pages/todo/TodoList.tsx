import * as React from "react";
import styles from "@Components/todo/todo.scss";
import {touchEnd, touchStart} from "../../../common/hooks/longClick";
import cn from "classnames";
import {Todo} from "../../../redux/todo";

type TodoListProps = {
    todos : Todo[],
    onToggle: (id:string) => void,
    onRemove : (e: React.MouseEvent, id:string) => void,
    isLongClick : boolean,
    setIsLongClick : any
}

const TodoList = ({todos, onToggle, onRemove, isLongClick, setIsLongClick}: TodoListProps) => {
    return(
        <>
            {
                todos.map((todo) => (
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
                ))
            }
        </>
    )
}
export default TodoList;