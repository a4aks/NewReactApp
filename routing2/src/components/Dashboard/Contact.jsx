import React from 'react'
import { useParams } from 'react-router-dom'

export const Contact = () => {
  const params = useParams();
  return (
    <div className="box">Contact No.: {params.id}</div>
  )
}
