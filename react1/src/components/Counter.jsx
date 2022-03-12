import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>Counter</h2>{count}
        <div>
           <div> <button onClick={(e) =>{ setCount(count+1)} }>+</button></div>
           <div> <button onClick={(e) =>{ setCount(count-1)}}>-</button></div>
        </div>
    </div>
  )
}
