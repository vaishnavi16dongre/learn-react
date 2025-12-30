import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () =>{

    setCount(count+1)


  }
  const removeValue = () =>{
    setCount(count-1)

  }
  return (
    <>
    <h2>Value is  {count>20? "stop" : count && count<0? "stop" : count}</h2>
     <button onClick={addValue}>Add Value {count>20? "20" : count && count<0? "0" : count}</button>
     <br/>
     <br/>
       <button onClick={removeValue}>Remove Value  {count>20? "20" : count && count<0? "0" : count}</button>
    </>
  )
}

export default App
