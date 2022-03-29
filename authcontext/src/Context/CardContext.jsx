import React, { Children, createContext, useState } from "react";

export const CardContext = createContext();
export const CardContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [token, settoken] = useState("");

  const LoginUser = (token) => {
    setisAuth(true);
    settoken(token);
  };

  const LogOut = () => {
    setisAuth(false);
  }
  return (
    <CardContext.Provider value={{ isAuth, LoginUser,LogOut,token }}>
      {children}
    </CardContext.Provider>
  );
};
