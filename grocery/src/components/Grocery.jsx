import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
  const [todo, setTodo] = useState([]);

  const onAdd = (newTodo) => {
    setTodo([...todo, newTodo]);
  };

  const onDeleteItem = (itemtoDelete) => {
    const newTodoList = todo.filter((todo) => todo.id !== itemtoDelete.id);
    setTodo(newTodoList);
  };

  return (
    <div>
      <h1>GROCERY ITEM</h1>
      <GroceryInput onAdd={onAdd} />
      <div style={{display: "flex" , flexDirection: "column", justifyContent:"center", gap:"20px"}}>
        {todo.map((item) => {
          return (
            <GroceryList
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};
