import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {  
  return (
   <>
   <h1 class="bg-blue-600 text-white p-10 rounded font-extrabold mb-10">Khaista Rahman</h1>

   <Card username="Khaista Rahman" btnText="Click me"/>
   <Card username= "Shahid zada" btnText = "Visit me"/>
   </>
  )
}

export default App
