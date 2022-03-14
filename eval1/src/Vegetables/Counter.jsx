import React, { children, useState } from "react";

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div>{props.children}</div> 
        <div>
          <h2>{count}</h2>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={(e) => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
