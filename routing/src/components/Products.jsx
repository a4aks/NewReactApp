import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "./Product";

export const Products = () => {
  const [value, setvalue] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/product`)
      .then((res) => res.json())
      .then((res) => setvalue(res))
      .catch((e) => console.log(e));
  }, []);

  // console.log(value);
  return (
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Price</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        {value.map((item) => {
        return (<Product {...item}/>)
        })}
      </tbody>
    </table>
  );
};
