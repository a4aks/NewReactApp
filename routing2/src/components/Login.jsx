import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const Login = () => {

 const {onLogin} = useContext(AuthContext)
  return (
    <div>
        Login
        <button onClick={onLogin}>Sign In</button>
    </div>
  )
}
