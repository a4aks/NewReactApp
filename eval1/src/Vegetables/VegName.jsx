import React, { useState } from 'react';
import { Counter } from './Counter';


export const VegName = () => {
  return (
    <div>
       <Counter>
         <h3>Tomatoes</h3>
       </Counter>
       <Counter>
         <h3>Potatos</h3>
       </Counter>
       <Counter>
         <h3>Carrots</h3>
       </Counter>
       <Counter>
         <h3>Onions</h3>
       </Counter>       
    </div>
  )
}
