import React from 'react'
import { createRoot } from 'react-dom/client.js'
import App from './App.jsx'


const anotherElement = (
    <a href='https://google.com' target='_blank'>Click me to visit google</a>
)

const anotherInput = (
    <input type="text" placeholder='enter your name ' />
)

const ReactInput = React.createElement(// first time create input in react
    'input',
    {type:'text' , placeholder: 'enter your name'}
)

const reactElement = React.createElement(
    'a',
    {href : "http://google.com" , target : "_blank"},
    'click me to visit google'
)

const ReactBtn = React.createElement(// first time create a button in react
    'button',
    {

    },
    'click me to change background color change'
)

createRoot(document.getElementById('root')).render(

   <App />
   
)
