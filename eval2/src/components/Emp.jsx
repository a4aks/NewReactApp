import React from 'react'

export const Emp = ({emp}) => {
 console.log(emp)
  return (
    <div>
        {emp.map((emp) =>{
          return (
              <>
          <div>Name: {emp.name}</div>
          <p>{emp.gender}</p>
          <p>{emp.role}</p>
          <p>{emp.department}</p>
          <p>{emp.salary}</p>
          </>
          )
        })}
    </div>
  )
}
