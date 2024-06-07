import React,{useState} from 'react'

function Form() {
    const [text,setText]=useState("");

  return (
    <div>
        <form action="">
            <input onChange={(e)=>setText(e.target.value)} type="text" value={text} />
        </form>
    </div>
  )
}

export default Form