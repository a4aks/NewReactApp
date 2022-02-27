import React from "react";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

export const User = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (params.cake) {
        console.log(params)
      fetch(`http://localhost:3000/users/${params.cake}`)
      .then((r) => r.json())
      .then((d) =>setUser(d));
    }
  }, [params]);
  return <div>{user.id}: User: {user.name}</div>;
};
