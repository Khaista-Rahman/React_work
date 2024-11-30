import { useState , useCallback, useEffect , useRef  } from 'react'

import './App.css'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumberallowed] = useState(false);
  const [charactersAllowed , setCharactersAllowed] = useState(false)
  const [password , setpassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)

  const  passwordGenerator = useCallback(() => {
    let pass  = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charactersAllowed) str += "!@#$%^&*";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  } , [length , numberAllowed , charactersAllowed , setpassword])


  useEffect(() => {
    passwordGenerator()
  } , [length , numberAllowed , charactersAllowed , passwordGenerator])

  const copyCode = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , 10)
    window.navigator.clipboard.writeText(password);
    
  },[password])


  return (
    <div className='w-full h-screen bg-gray-700'>
      <div className='w-full flex justify-center py-5'>
     <h1 className='bg-purple-900 text-white font-bold p-5 rounded-lg shadow-lg shadow-white'>Another Password Generator</h1>
     </div>
     {/* main container  */}

     <div className='mt-10 w-full flex justify-center items-center py-5 px-8 '>
      <div className='w-full md:w-[80vw] lg:w-[50vw] bg-slate-500 shadow-md shadow-blue-400 py-5 px-4'>
        <div className='w-full flex justify-center items-center'>
          <input type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className='py-2 px-2 hover:bg-slate-300 focus:border-transparent focus:outline-none border-2 border-solid duration-200'
          placeholder='Password Generator'
          />
          <button className='bg-blue-700 text-white hover:bg-blue-400 duration-300 font-bold rounded-r-2xl py-3 px-2' onClick={copyCode}>COPY</button>
        </div>
        <div className='w-full flex justify-evenly items-center mt-5'>
          <input type="range"
          min={8}
          max={25}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
           />
          <label htmlFor="range" className='font-bold text-white'>Length: {length}</label>
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          onChange={() => {setNumberallowed((prev) => !prev)}}
          />
          <label htmlFor="Numbers" className='font-bold text-white'>Number</label>
          <input type="checkbox"
          defaultChecked = {charactersAllowed}
          onChange={() => {setCharactersAllowed((prev) => !prev)}}
          />
          <label for="characters" className='font-bold text-white'>Characters</label>
        </div>
      </div>
     </div>
    </div>
  )
}

export default App
