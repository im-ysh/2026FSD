// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
// <h1 style={{ backgroundColor: 'red' }}>Password Generator</h1>
//     </>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed ,  setNumberAllowed] = useState(false)
  const [ charAllowed, setCharAllowed] = useState(false)

  return (
    <>
      <h1 className="bg-red-400 text-white p-4">
        Password Generator
      </h1>
    </>
  )
}

export default App
