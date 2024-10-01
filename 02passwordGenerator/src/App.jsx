import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState("");
  const [length , setlength] = useState(10);



  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i <= length ; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex]
    }
    setPassword(pass)
  }, [setPassword,setlength])

  const copyToClipboard = useCallback( () => {
    navigator.clipboard.writeText(password);
    alert("password copy to clipboard")
  },[password])

  return (
    <>
      <div className='flex-wrap'>
      <input
        className='w-[50vw] p-3 rounded-l-lg'
        type="text"
        readOnly
        placeholder='password'
        value={password}  
      />
      <button className='bg-blue-600 text-white p-2' onClick={passwordGenerator}>
        Generate Password
      </button>
      <button className='bg-green-600 text-white p-2 ml-2' onClick={copyToClipboard}>
        Copy
      </button>
      <input type="range"
      min={8}
      max={50}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setlength(e.target.value)}}
      />
      <label>Length : {length}</label>
      </div>

      
    </>
  );
}

export default App;
