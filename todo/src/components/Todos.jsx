import React, { useState } from 'react'
import styles from "./Todo.module.css";
import { TodoInput } from './TodoInput';

export const Todos = ({ todo, onDeleteItem, onUpdateTodos }) => {

    const [isStricked, setIsStriked] = useState(false);
    const [isEditModeOn, setisEditModeOn] = useState(false);

    const onAdd = (newAdd) =>{
        onUpdateTodos({
            ...newAdd,
            id: todo.id
        })
        setisEditModeOn(false);
    }
    return (
        <li className={styles.todoItem}>
            {isEditModeOn ? (
                <TodoInput onAdd={onAdd}/>
            ) :
            (
                <>
                    <input type="checkbox" onChange={() => {
                        setIsStriked(!isStricked);
                    }} />
                    <span className={(isStricked) ? styles.strick : styles.normal}>{todo.value}</span>
                </>
            )}
            <button onClick={() => onDeleteItem(todo)}>Delete</button>
            <button onClick={() => setisEditModeOn(!isEditModeOn)}>
              {isEditModeOn ?"Cancle Edit":"Edit"}
            </button>
        </li>
    )
}
