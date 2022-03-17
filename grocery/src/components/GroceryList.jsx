import React from "react";

export const GroceryList = ({ item,onDeleteItem }) => {
  return (
    <>
      <div>{item.item}</div>
      <div>
        <button onClick={() => onDeleteItem(item)}>Remove</button>
      </div>
    </>
  );
};
