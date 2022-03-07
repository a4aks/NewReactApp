import React from 'react'
import { useState } from 'react';
import styled from "styled-components";

export const Styles = () => {
  const [count, setCount] = useState(0);

  const AppWrapper = styled.div`
    border: 1px solid black;
    padding:20px;
    
    h2{
        color: red;
    }
    `;
    const Hello = styled.h1`
    color:${(props) =>(props.count < 7 ? "red": "green")};
    font-size: ${(props) => (props.count < 5 ? "20px" : "50px")}
    `

    const Link = styled.a`
    text-decoration:none;
    color:pink;
    font-size :${({fs}) => fs}
    
    `
  return (
    <AppWrapper>
        <Link href = "http://www.google.com" fs = "40px" target ="_blank">Go To Google</Link>
         <Hello count = {count}>Hello CodeSandBox</Hello>
         <h2>Start editing to some magic</h2>
         <button onClick={()=> setCount(count+3)}>Increment</button>
         <button onClick={()=> setCount(count-3)}>Decrement</button>
    </AppWrapper>
  )
}
