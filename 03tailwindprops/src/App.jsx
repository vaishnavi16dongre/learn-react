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


<Card username="Jane Ives" age="17" Location="Hawkins" image1="https://i.pinimg.com/736x/08/2d/cc/082dcc58b75d24b10e40ec8137b5b86b.jpg"/>

<Card username="Mike Wheeler" age="17" Location="Hawkins" image1="https://i.pinimg.com/1200x/07/bf/4d/07bf4dcbf53536721fb7b0dc1ae61285.jpg" />
</div>
    </>
  )
}

export default App
