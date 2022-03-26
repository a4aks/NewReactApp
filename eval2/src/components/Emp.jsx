import React from "react";

export const Emp = ({ name,gender,role,department,salary }) => {
  return (
    <div>
     
          <div style={{padding: "20px", border:"2px solid black", margin: "10px", width:"400px"}}>
            <div>Name: {name}</div>
            <div>Gender: {gender}</div>
            <div>Role :{role}</div>
            <div>Department :{department}</div>
            <div>Salary :{salary}</div>
            </div>
      
    </div>
  );
};
