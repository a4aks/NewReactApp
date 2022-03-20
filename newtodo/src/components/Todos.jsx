import React, { useState } from "react";

export const Todos = () => {
  const [value, setValue] = useState("");
  const[todo,setTodo] = useState([]);
  const[page,setPage] = useState(1);

  React.useEffect(() =>{
      getTodos();
  }, [page]);

  const getTodos = () =>{
     fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
     .then((res) => res.json())
     .then((res) => setTodo(res))
     .catch((err) => console.log(err));
  }
  
  const handleAdd = () =>{
    const payload =  {
        title: value,
        status:false
    };
    const payloadjson = JSON.stringify(payload);
    fetch(`http://localhost:3001/todos`,{
        method:"POST",
        body:payloadjson,
        headers:{
            "content-type":"application/json"
        }
    }).then(() =>{
       getTodos();
    })
  }
 
  return (
    <div>
      <h2>ADD TODO</h2>
      <input
        type="text"
        value={value}
        placeholder="enter the item"
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button onClick={() =>{
          if(value){
            handleAdd()
            setValue("");
          }else{
              alert("enter any value")
          }
      }}>ADD</button>

      {todo.map((todo) =>{
          return (
              <h2>{todo.title}</h2>
          )
      })}
      <button onClick={() => setPage(page-1)} disabled ={page===1}>PREV</button>
      <button onClick={() => setPage(page+1)}>NEXT</button>
    </div>
  );
};
