import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";

export const UseButton = () => {
    // const[bgcolor, setbgcolor] = useState("");
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justiify-content: center;
  `;
  return (
    <Wrapper>
      <Button>Primary Button</Button>
      <Button $mode ="primary">Default Button</Button>
      <Button $mode = "dashed" >Dashed Button</Button>
      <Button $mode = "text" >Text Button</Button>
      <Button as = "a" $mode = "link">Link Button</Button>
    </Wrapper>
  );
};
