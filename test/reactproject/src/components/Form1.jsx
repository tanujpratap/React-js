import React,{useState} from 'react'

function Form1() {
    const [name,setName]=useState({firstname:'',lastname:''});
    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }
  return (
  <div>
    <form action="">
        <h1>{name.firstname}-{name.lastname}</h1>
        <label >firstname</label>
        <input onChange={(e)=>setName({...name,firstname:e.target.value})} type="text"  value={name.firstname}/>
        <label>lastname</label>
        <input onChange={(e)=>setName({...name,lastname:e.target.value})} type="text"  value={name.lastname}/>
<button onClick={(e)=>handleSubmit(e)}>Submit</button>
    </form>
  </div>
  )
}

export default Form1