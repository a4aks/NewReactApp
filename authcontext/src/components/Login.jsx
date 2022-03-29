import React, { useContext } from "react";
import { CardContext } from "../Context/CardContext";

export const Login = () => {
  const { token } = useContext(CardContext);
  return (
    <>
      <h1>User Has Already Login.</h1>
      <h1>User has Token No {token}</h1>
    </>
  );
};
