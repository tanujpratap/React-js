import React from 'react'

function Message() {
    function sayhello(){
        console.log("hello everyone");
    }
  return (
    <button onClick={sayhello}>click me to say hello</button>
  )
}

export default Message