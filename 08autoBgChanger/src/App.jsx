import { useState , useEffect } from 'react'
import './index.css'

function App() {
  const [name, setName] = useState("");
  let names = ["khaista" , "shahid"];
  useEffect(() => {
    let nameIndex = 0; // intialization or starting number

    let interval = setInterval(() => {// store this interval in veriable
      nameIndex = (nameIndex + 1) % names.length// take one index number from array.
      setName(names[nameIndex])// update the array index to the hooks
    }, 2000);

    return () => clearInterval(interval) // and then clean the index number what you show and the other will be show .
  }, [names]);

  return (
    <div className='w-[100vw] h-screen bg-gray-500'>
      <nav className='w-full h-20 bg-black/30 flex justify-evenly items-center z-50 sticky top-0 '>
        <h1 className='text-sm font-extrabold text-blue-300'>Name Changer </h1>
        <a href="#"><h1 className='text-sm font-extrabold text-blue-300'>Menu</h1></a>
      </nav>
      <div className='w-full h-full flex justify-center items-center'>
        <h1  className='text-xl font-extrabold text-white duration-200'>{name}</h1>
      </div>

    </div>
  )
}

export default App
