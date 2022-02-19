import React, { useState } from 'react'
import { TodoInput } from './TodoInput';
import { Todos } from './Todos';

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    const onAdd = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

    const onUpdateTodos = (UpdateTodo) => {
        const newTodoList = todos.map((todo) => {
            if (todo.id === UpdateTodo.id) {
                return UpdateTodo;
            } else {
                return todo;
            }
        });
        setTodos(newTodoList);
    }

    const onDeleteItem = (itemToDelete) => {
        const newTodoList = todos.filter((todo) => todo.id !== itemToDelete.id);
        setTodos(newTodoList);
    }
    return (
        <div>
            <TodoInput onAdd={onAdd} />
            <div>
                <ul>
                    {todos.map((todo) => {
                        return (
                            <Todos key={todo.id} todo={todo} onDeleteItem={onDeleteItem} onUpdateTodos={onUpdateTodos} />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};
