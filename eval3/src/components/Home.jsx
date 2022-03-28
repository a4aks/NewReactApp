import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const Home = () => {
    const[profile, showProfile] = useState({});
    const{uname} = useParams();
    useEffect(() =>{
        fetch(`https://masai-api-mocker.herokuapp.com/user/${uname}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            showProfile(res);
        })
        .catch((err) => console.log(err));
    }, [])
  return (
    <div>
        
    </div>
  )
}
