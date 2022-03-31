import React, { useDebugValue, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const ProductDetails = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/product/${id}`)
      .then((res) => res.json())
      .then((res) => setInfo(res))
      .catch((e) => console.log(e));
  }, []);

console.log(info);

  return (
    <div style={{border: "2px solid red" , width:"500px"}}>
      <h3>Product Details</h3>
      <div style={{display:"flex", flexdirection:"column", margin: "20px", fontSize:"25px",gap:"10px"}}>
       <div> Name : {info.name}</div>
       <div> Price : {info.price}</div>
      </div>
    </div>
  );
};
