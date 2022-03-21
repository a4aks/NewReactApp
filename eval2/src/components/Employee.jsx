import React, { useState } from "react";
import { Emp } from "./Emp.jsx";

export const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState();

  React.useEffect(() => {
    getEmployee();
  }, []);

  const showByMarketing = () =>{
      const newEmployee = employee.filter(emp => emp.department === "Marketing");
      console.log(newEmployee);
      setEmployee(newEmployee)
  }
  const getEmployee = () => {
    fetch(`http://localhost:3001/employees`)
      .then((res) => res.json())
      .then((res) => {
        setEmployee([res]);
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
    fetch(`http://localhost:3001/employees`, {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
       getEmployee();
      })
      .catch((err) => console.log(err));
  };

  return (
     
    <div>
         <h1>Employee Details</h1>
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
          <button onClick={getEmployee}>Show All Departments</button>
          <button onClick={showByMarketing}>Show Marketing</button>
          <button>Show HR</button>
          <button>SHow IT</button>
          <button>Show Finance</button>
          <button>Sort By Salary Ascending</button>
          <button>Sort By Salary descending</button>
      </div>
      <div style={{padding: "20px", border:"2px solid black", margin: "10px"}}>
        {employee.map((emp) => {
          return <Emp key={emp.id} emp={emp} />;
        })}
      </div>
    </div>
  );
};
