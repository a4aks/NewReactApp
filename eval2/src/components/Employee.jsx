import React, { useState } from "react";
import {Emp} from "./Emp.jsx";

export const Employee = () => {
  const[employee, setEmployee] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState();

  React.useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
      fetch(`http://localhost:3001/employees`)
      .then((res) => res.json())
      .then((res) => {setEmployee([...employee,res])
    })
      .catch((err) => console.log(err));
  };

  const handleAdd = () => {
    const payload = {
      name: name,
      gender: gender,
      department: department,
      role: role,
      salary: salary,
    };

    const payloadjson = JSON.stringify(payload);
    fetch(`http://localhost:3001/employees`,{
        method: "POST",
        body: payloadjson,
        headers:{
            "content-type":"application/json",
        },
    })
    .then((res) =>{
       console.log(res);
       getEmployee();
    })
    .catch((err) =>console.log(err) )
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.currentTarget.value)}
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.currentTarget.value)}
        />
        <button onClick={handleAdd}>ADD EMPLOYEE</button>
      </div>
      <div>
        {employee.map((emp) =>{
          return (<Emp key = {emp.id} emp = {emp}/>)
      })}
        </div>
    </div>
  );
};
