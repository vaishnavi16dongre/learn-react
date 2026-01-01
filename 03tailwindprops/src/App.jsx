import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
<h1 className='bg-green-400 text-black p-3 rounded-xl'>Tailwind 
test</h1>
<br/>
<div className='cardname'>


<Card username="Jane Ives" age="17" Location="Hawkins"/>

<Card username="Mike Wheeler" age="17" Location="Hawkins" />
</div>
    </>
  )
}

export default App
