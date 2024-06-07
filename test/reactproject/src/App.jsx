import Hello from  './components/Hello';
import Bye from  './components/Bye';
import Animals from  './components/Animals';
import Fruits from './components/Fruits';
import Message from './components/Message';
import Counter from './components/Counter';
import Form from './components/Form';
import Form1 from './components/Form1';


function App() {
 
const seatnumbers=[
  1,2,3,4,5
];
const person={
  name:"tanuj",
  message:"hi there"
}
  return (
    <>
    {/* <Hello seatnumbers={seatnumbers}/>
    <Hello name="anuj" phone="9389988153"/>

    <Bye person={person}/>
    <Animals/>
    <Fruits/> */}

      <Message/>
      <Counter/>
      <Form/>
      <Form1/>




    </>
  )
}

export default App
