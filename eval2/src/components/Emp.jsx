import React from "react";

export const Emp = ({ emp }) => {
  console.log(emp);
  return (
    <div>
      {emp.map((emp) => {
        return (
          <div style={{padding: "20px", border:"2px solid black", margin: "10px", width:"400px"}}>
            <div>Name: {emp.name}</div>
            <div>Gender: {emp.gender}</div>
            <div>Role :{emp.role}</div>
            <div>Department :{emp.department}</div>
            <div>Salary :{emp.salary}</div>
            </div>
        );
      })}
    </div>
  );
};
