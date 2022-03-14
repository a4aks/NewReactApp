import React, { useState } from 'react'

export const Todos = ({todo}) => {
  return (
    <div>
        <h3>{todo.value}</h3>
    </div>
  )
}
