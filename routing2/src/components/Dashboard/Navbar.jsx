import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export const Navbar = () => {
  const {onLogout} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contacts">Contacts</Link>

        <button onClick={onLogout}>Logout</button>
    </div>
  )
}
