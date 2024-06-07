import React from 'react'

import Fruit from './Fruit';
function Fruits() {
    let fruits=[
        {name:"apple",price:150},
        {name:"orange",price:100},

        {name:"banana",price:50},

    ]
  return (
    <div>{fruits.map(fruit=>(
       <Fruit name={fruit.name} price={fruit.price}/>
    ))}</div>
  )
}

export default Fruits