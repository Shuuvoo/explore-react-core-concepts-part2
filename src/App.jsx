import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Friend from './Friend'
function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    confirm('button click 2')

  }
  
  return (
    <> 
      <h2> React Core Concepts Part 2</h2>
      <Friends></Friends>
        <Users></Users>
        <Team></Team>

      <button onClick={handleClick}> Click Me</button>
      <button onClick={handleClick2}> Click Me</button>
    </>
  )
}

export default App
