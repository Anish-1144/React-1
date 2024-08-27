import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

// let counter = 0;

// const addValue = () => {
// counter = counter+1;
// console.log("add",Math.random());
// }

// const subValue = () => {
//   counter = counter+1;
//   console.log("sub",Math.random()); 
//   }

  let [counter,setCounter] = useState(0)



  const addValue = () => {
    counter = counter+1;
     setCounter(counter)
     }



     const subValue = () => {
        counter = counter-1;
         setCounter(counter) 
       }


  return (
    <>
     
     <h1>hooks</h1>
     <h2>counter value {" =>"} {counter}</h2>

     <button onClick={addValue}>increse +</button>
     <button onClick={subValue}>decrese -</button>


    </>
  )
}

export default App
