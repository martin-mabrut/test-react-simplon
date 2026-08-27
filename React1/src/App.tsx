import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");


  return (
    <div>
      <input onChange={(input) => {
        const values = input.target.value;
        setInput(values);
        }
      }>
      </input>

      <h1>{input}</h1>
      </div>
  )
}

export default App
