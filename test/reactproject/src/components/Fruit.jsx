import React from 'react'

function Fruit({name, price}) {
  return (
   
   <div>
    { price>50? <h1>price of the {name}is {price}</h1>:""}
   </div>
  )
}

export default Fruit