import React, { useContext } from 'react'
import { CardContext } from '../Context/CardContext'
import { Body } from './Body';
import { Login } from './Login';

export const Navbar = () => {
  const{isAuth,LogOut} = useContext(CardContext);

  const logout = () =>{
    LogOut();
  }
  if(!isAuth){
    return (<Body />);
  }
  return (
    <div>
      <button onClick={logout}>LogOUT</button>
      <Login />
    </div>
  )
}
