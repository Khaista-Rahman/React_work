
import { useState } from "react";// this is hooks alot work do from one click and this very important
import Myfun from "./Myfile"
// this is the good practice when ever you create a file and function the first letter will be capital this very important .



function App() {
  // hook using
  // the setCounter is simple just a refrance of that counter and you give any name what you want. (counter , chaiCounter , supermanCounter , anthing).
  let [counter , setCounter] = useState(0)// this is simple startup number.

  function addNum () {
    if (counter === 20) {
      counter = 0;
      alert("oops! we can't count more number hehehe");
      
    } else {
      setCounter(counter += 1);
      console.log(counter)
    }
  }
 
  const removeNum = () => {
    if (counter <= 0) {
      counter = 0;
      alert ("negative value is not allow");
    } else {
      setCounter(counter - 1);
    }
  }
  return (
   <>
   <h1>chai aur code {counter}</h1>
   <h2>number counter {counter}</h2>

   <button onClick= {addNum}>add button {counter}</button>
   <br />
   <button onClick={removeNum}>remove button {counter}</button>
   </>
   
  )
}

export default App
