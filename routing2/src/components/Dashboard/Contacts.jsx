import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Contacts = () => {
  const [basePath, setBasePath] = useState("");
  const location = useLocation();

  useEffect(() =>{
     let parts = location.pathname.split("/");
     let base = "/" + parts[1] + "/" + parts[2];
     setBasePath(base);
  }, [location])
  return (
    <div className="box"> 
      Contacts
      <div style={{display:"flex"}}>
          <Link to = {`${basePath}/1`}>Contact 1</Link>
          &nbsp;
          <Link to ={`${basePath}/2`}>Contact 2</Link>
          &nbsp;&nbsp;&nbsp;
          <Link to = {`${basePath}/new`}>Create Contact</Link>
      </div>
      <Outlet />
    </div>
  )
}
