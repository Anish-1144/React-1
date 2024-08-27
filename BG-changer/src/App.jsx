import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    {/* <h1  className='bg-black text-slate-600 text-3xl'>Hi</h1> */}

 <div className='w-full h-screen duration-200'
 style = {{backgroundColor: color}}>

<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3  gap-3 shadow-lg bg-white py-2 rounded-xl'>

<button 
onClick={()=> setColor("red")}
className='outline-none px-4 py-1 rounded-xl text-white shadow-lg 'style = {{backgroundColor:"Red"}} >Red</button>


<button 
onClick={()=> setColor("blue")}

className='outline-none px-4 py-1 rounded-xl text-white shadow-lg 'style = {{backgroundColor:"blue"}} >blue</button>


<button 
onClick={()=> setColor("green")}

className='outline-none px-4 py-1 rounded-xl text-white shadow-lg 'style = {{backgroundColor:"green"}} >green</button>

</div>



 </div>



    </>
  )
}

export default App
