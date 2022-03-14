import React,{useState} from "react";

export const TodoInput = ({onAdd}) => {
    const[value, setValue] = useState("");
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
              onAdd ({
                  value,
              })
            setValue("");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};
