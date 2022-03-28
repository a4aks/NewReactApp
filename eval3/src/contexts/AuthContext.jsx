import React, { useState } from 'react'

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) =>{
    const[isAuth,setIsAuth] = useState(false);
    const[token,setToken] = useState("");

    const setlogin = (token) =>{
        setIsAuth(true);
        setToken(token)
    }
    const logout = () =>{
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value = {{isAuth,token,setlogin,logout}} >
            {children}
        </AuthContext.Provider>
    )
}