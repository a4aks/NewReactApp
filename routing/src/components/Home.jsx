import React from 'react';
import {Link,useNavigate} from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const goToAboutPage = () =>{
      navigate("/about");
  }
  return (
    <div>Home
        <div>
            <Link to='/about'> Home</Link>
            <button onClick={goToAboutPage}>About</button>
        </div>
    </div>
  )
}
