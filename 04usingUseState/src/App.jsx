import { useState } from 'react'
import './App.css'

function App() {


  // this is what you click this button the button will be thirple clicking
  const [num , setNum] = useState(0)
  const thirpleclicking = () => {
    setNum((a) => a+1) //expacting 12 => 15
    setNum((a) => a+1) //expacting 15 => 18
    setNum((a) => a+1) //expacting 18 => 21
  }

  // backgroundColor changer
  const [color , setcolor] = useState('blue')



  // the act like to press and increase the value
  const [myage , setmyage] = useState(12);

  const age = () => {
    setmyage((a) =>  a + 1)
    
  }


  // this is simply a button when button you press this will be give the output how many times you press the button
  const [press , setpress] = useState(0)

  const clickme = () => {
    setpress(press + 1)
  }

  // using the object in useState hook
  const [form , setform] = useState({
    firstName : "khaista",
    lastName : "Rahman",
    Email : "rahman@gmail.com"
  })

// using array in useState hook
  const [array , setarry] = useState([
    "khaista",
    "zain",
    "shahid",
    "yasir"
  ])
  return (
    <>
   <label htmlFor="">
    First Name : 
    <input type="text"
    readOnly
    value={form.firstName}
    onChange={e => setform(e.target.value)}
    />
   </label>

   <label htmlFor="">
    Last Name : 
    <input type="text"
    readOnly
    value={form.lastName}
    onChange={e => setform(e.target.value)}
    />
   </label>

   <label htmlFor="">
     Email : 
    <input type="text"
    readOnly
    value={form.Email}
    onChange={e => setform(e.target.value)}
    />
   </label>

   <label htmlFor="">
    Khaista : 
    <p
    value ={array[0]}
    onChange={e => setarry(e.target.value)}
    ></p>
   </label>

   <div>
    <button onClick={clickme}>you press me {press} times</button>
   </div>

   <div>
    <button onClick={() => {
      age();
      age();
      age();
    }
    }>+3</button>
    <p>{myage}</p>
    <button onClick={() => {
      age()
    }}>+1</button>
   </div>
   

   <div className='w-full h-[100vh] flex justify-center items-center' style={{backgroundColor : color}}>
    <div>
      <button onClick={() => setcolor("green")}>green</button>
      <button onClick={() => setcolor("yellow")}>yellow</button>
      <button onClick={() => setcolor("white")}>white</button>
      <button onClick={() => setcolor("purple")}>purple</button>
      <button onClick={() => setcolor("gray")}>gray</button>
    </div>
   </div>

   <div>
    <button onClick={thirpleclicking}>one click act thirple time {num}</button>
   </div>


    </>
  )
}

export default App
