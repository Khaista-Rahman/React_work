
import { useState } from "react";
import Myfun from "./Myfile"
// this is the good practice when ever you create a file and function the first letter will be capital this very important .



function App() {

  let [counter , setCounter] = useState(0)// this is simple startup number.

  function addNum () {
    setCounter(counter += 1);
    console.log("button is clicked", counter)
  }
 
  return (
   <>
   <h1>chai aur code {counter}</h1>
   <h2>number counter {counter}</h2>

   <button onClick= {addNum}>add button {counter}</button>
   <br />
   <button>remove button {counter}</button>
   </>
   
  )
}

export default App
