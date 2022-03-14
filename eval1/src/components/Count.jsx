import React,{Children, useState} from 'react';

export const Count = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
          <h2>{Children}:  {count}</h2>
          <div>
              <button onClick={(e) => {setCount(count+1)}}>+</button>
              <button onClick={(e) => {setCount(count-1)}}>-</button>
          </div>
      </div>
    )
}
