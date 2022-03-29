import React, { useContext, useState } from "react";
import { CardContext } from "../Context/CardContext";
import { Login } from "./Login";

export const Body = () => {

  const{isAuth,LoginUser} = useContext(CardContext);

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setlogin({
      ...login,
      [id]: value,
    });
  };
  const { email, password } = login;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        LoginUser(res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if(isAuth){
    return ( <Login />)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type="text"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <input type="submit" value="LOGIN" />
      </form>
    </div>
  );
};
