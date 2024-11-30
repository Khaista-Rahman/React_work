import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
     <h1>counter value : {count}</h1>
     <button className='bg-green-600 text-white py-2 px-5' onClick={() => setCount(count + 1)}>Add Num</button>
     <br />
     <button className='bg-red-600 mt-5 text-white py-2 px-5' onClick={() => setCount(count - 1)}>Remove Num</button>
    </>
  )
}

export default App
