import { useState } from 'react'

import './App.css'

function App() {
  const [Counter,setcounter] = useState(15)
   // let Counter = 78;

  const addValue = () => {
    // Counter  = Counter+1
    // console.log(Counter);
    // setcounter(Counter+1);
    // setcounter(Counter+1);
    // setcounter(Counter+1);
// same operation ame method so it send s in batches so we use below apprach
setcounter((prevcounter) => prevcounter+1)
setcounter((prevcounter) => prevcounter+1)
setcounter((prevcounter) => prevcounter+1)
}

  const removeValue = () => {
setcounter((prevcounter) => prevcounter-1)
setcounter((prevcounter) => prevcounter-1)
setcounter((prevcounter) => prevcounter-1) 
}
  return (
    <>
    <h1>React course with vaishu {Counter}</h1>
    <h2>Counter value:</h2>
    <button onClick={addValue}>add value</button>{" "}
    <button onClick={removeValue}>remove value</button>{""}
 
    <p>footer:</p>    
    </>
  )
}
export default App
