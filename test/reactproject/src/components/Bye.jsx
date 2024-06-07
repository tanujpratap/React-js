import React from 'react'

function Bye({person}) {
  return (
    <h1>Bye {person.name}{person.message}</h1>
  )
}

export default Bye