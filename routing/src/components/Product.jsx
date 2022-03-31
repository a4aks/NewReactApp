import React from 'react';
import { Link } from 'react-router-dom';


export const Product = ({id,name,price}) => {
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
            <Link to = {`/product/${id}`} > About</Link>
        </td>
    </tr>
  )
}
