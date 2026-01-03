import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("Pink")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
            <div className="fixed  mx-auto w-[1200px]  flex items-center justify-center bg-gray-300 border-2 border-gray-900 rounded-full p-3 gap-4 bottom-12 inset-x-0  ">
 
                    <button type="button" onClick={()=> setColor("green")} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Green</button>
                    <button type="button" onClick={()=> setColor("blue")} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5" >Blue</button>
                    <button type="button" onClick={()=> setColor("cyan")} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Cyan</button>
                    <button type="button" onClick={()=> setColor("teal")} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Teal</button>
                    <button type="button" onClick={()=> setColor("lime")} className="text-heading bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Lime</button>
                    <button type="button" onClick={()=> setColor("red")} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Red</button>
                    <button type="button" onClick={()=> setColor("pink")} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Pink</button> 
                    <button type="button" onClick={()=> setColor("purple")} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-4 py-2.5 text-center leading-5">Purple</button>

    </div>

  </div>

</>
  )
}

export default App
