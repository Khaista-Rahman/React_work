import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  "click me i am gooogle"
)
createRoot(document.getElementById('root')).render(

    reactElement
  
)
