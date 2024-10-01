import { useState } from 'react'
import './App.css'



// let view = document.querySelector('body');
// let btns = document.querySelectorAll('button');
//   btns.forEach( (btn) => {
//     let colors = btn.textContent;
//     btn.addEventListener("click", () => {
//       if (btn.textContent === colors) {
//         view.style.backgroundColor = colors;
//       }
//     })
//   })


function App() {
  const [color, setColor] = useState("white")

  return (
    <>
   

    <div className='w-[100vw] h-[100vh] duration-200 bg-white flex justify-evenly items-center p-2 rounded flex-wrap' style={{backgroundColor : color}}>
      <button onClick={() => setColor("green")} className=' mt-5 bg-green-600 p-3 text-white font-extrabold'>green</button>
      <button onClick={() => setColor("blue")} className=' mt-5 bg-blue-600 p-3 text-white font-extrabold'>blue</button>
      <button onClick={() => setColor("purple")} className=' mt-5 bg-purple-600 p-3 text-white font-extrabold'>purple</button>
      <button onClick={() => setColor("white")} className=' mt-5 bg-white p-3 text-black font-extrabold'>white</button>
      <button onClick={() => setColor("yellow")} className=' mt-5 bg-yellow-500 p-3 text-white font-extrabold'>yellow</button>
      <button onClick={() => setColor("black")} className=' mt-5 bg-black p-3 text-white font-extrabold'>black</button>
      <button onClick={() => setColor("orange")} className=' mt-5 bg-orange-600 p-3 text-white font-extrabold'>orange</button>
    </div>
    
    </>
  )
}

export default App
