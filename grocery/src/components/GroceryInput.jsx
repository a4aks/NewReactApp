import React, { useState } from "react";
import {v4 } from 'uuid';

export const GroceryInput = ({onAdd}) => {
  const [item, setItem] = useState("");
  return (
    <div style={{padding: "20px"}}>
      <input
        type="text"
        value={item}
        placeholder="Enter the Item Name"
        onChange={e => 
          setItem(e.currentTarget.value)
        }
      />
      <button onClick={(e) =>{
          if(item){
            onAdd({
                item,
                id:v4(),
            })
            setItem("");
          }else{
              alert("Please add any item")
          }
      }}>ADD</button>
    </div>
  );
};
