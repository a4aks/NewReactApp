import React from "react";
import styled, { css } from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background-color: blue;
  color: white;
  border: 2px solid white;

  ${(props) => {
    switch (props.$mode) {
      case "primary":
        return css`
          background-color: white;
          color: black;
          border: 1px solid black;
        `;
       case "dashed":
           return css`
           background-color: white;
          color: black;
          border: 1px dashed black;
           `;
       case "text":
           return css`
            border: none;
            color:black;
            background-color: white;
           `;
        case "link": 
            return css`
            border: none;
            color:blue;
            background-color: white;
            `
    }
  }}
`;
