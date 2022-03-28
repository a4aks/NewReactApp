import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
 text-decoration:none;
 margin:5px;
 color:black;
`;

export const Navbar = () => {
  return (
    <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
         <StyledLink to = "/login">Login</StyledLink>
       <StyledLink to = "/Home/:uname">Home </StyledLink>
       <StyledLink to = "/register">Register</StyledLink>
       <StyledLink to = "/product">Products</StyledLink>
    </div>
  )
}

