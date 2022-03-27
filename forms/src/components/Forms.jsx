import React, { useEffect, useState } from "react";

export const Forms = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    isMarried: false,
  });
  const handleChange = (e) => {
    //   console.log(e.target.id);
    //   console.log(e.target.value);
    const { id, value, checked, type } = e.target;
    // console.log(id, value);
    setFormData({
      [id]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() =>{
    fetch(`http://localhost:3001/data`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        setFormData(res);
    })
    .catch((err) => console.log(err));
  },[])
  const { username, age, address, department, salary, isMarried } = formData;
  const payloadjson = JSON.stringify(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    fetch(`http://localhost:3001/data`, {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        placeholder="Enter Username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        id="age"
        placeholder="Enter Age"
        value={age}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        id="address"
        placeholder="Enter Address"
        value={address}
        onChange={handleChange}
      />
      <br />
      <label>
        DEPARTMENT:
        <select id="department" onChange={handleChange} value={department}>
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="CIVIL">CIVIL</option>
          <option value="ELECTRICAL">ELECTRICAL</option>
        </select>
        <br />
      </label>
      <input
        type="text"
        id="salary"
        placeholder="Enter Salary"
        value={salary}
        onChange={handleChange}
      />
      <br />
      <label>
        IS MARRIED:
        <input
          type="checkbox"
          id="isMarried"
          value={isMarried}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};
