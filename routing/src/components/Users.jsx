import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const goToUser = (user)=>{
       navigate(`/Users/${user.id}`)
  }

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      Users
      {users.map((user) => (
        <div key={user.id}>
            <button onClick={() =>goToUser(user)}>{user.name}</button>
         </div>
      ))}
    </div>
  );
};
