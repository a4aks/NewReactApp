import React, { useState } from 'react'
import { TodoInput } from './TodoInput';
import { Todos } from './Todos';

export const Todo = () => {
    const[todos, setTodos] = useState([]);

    const onAdd = (newTodo) =>{
        setTodos([...todos,newTodo]);
    }
  return (
    <div>
         <TodoInput onAdd = {onAdd} todos = {todos}/>
        <div>
            <ul>
               {todos.map((todo) =>{
                   return(
                       <Todos key = {todo.id} todo = {todo}/>
                   )
               })}
            </ul>
        </div>
    </div>
  )
}
