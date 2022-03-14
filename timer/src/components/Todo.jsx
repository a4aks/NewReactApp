import React, { useEffect, useState } from "react";
import {useAPI} from "../hooks/useAPI";

export const Todo = () => {
  
  const {loading, error, data, fetchAPI, updateAPI} = useAPI([]);
  const [value, setValue] = useState("");
  const updateData = () => {
    let payLoad = {
      value,
      isCompleted: false,
      createdAt: Date.now(),
    };
    // Add data to Backend
    updateAPI(fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payLoad),
    })
    ).then(() => setValue(""));
  };
  
  useEffect(() => {
     fetchAPI(fetch("http://localhost:3000/todos"));
  }, []);

  if(loading) return <div>Loading....</div>

  else if(error) return <div>Error....</div>

  else
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button onClick={updateData}>
          ADD
        </button>
      </div>
      {data.map((todo) => {
        return (
          <ul>
            <li key={todo.id}>{todo.value}</li>
          </ul>
        );
      })}
    </div>
  );
};
