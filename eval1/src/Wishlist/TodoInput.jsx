import React, { useState } from "react";

export const TodoInput = ({ onAdd, todos }) => {
  const [value, setValue] = useState("");
  console.log(todos.length);
  if (todos.length < 3) {
    return (
      <div>
        <h2> WishList</h2>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            if (value) {
              onAdd({
                value,
              });
              setValue("");
            }
          }}
        >
          ADD
        </button>
      </div>
    );
  }else{
      return(
          <h3> You cannot add more than 3 items to wishlist.</h3>
      )
  }
};
