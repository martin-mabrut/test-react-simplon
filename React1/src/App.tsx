import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState<string[]>([]);

  function createCard() {
    const newCardsArray: string[] = [...cards, input];
    setCards(newCardsArray)
  }


  return (
    <div>
      <input onChange={(input) => {
        const values = input.target.value;
        setInput(values);
        }
      }
      onClick={createCard}>
      </input>

      <h1>{input}</h1>

      <div>
        
      </div>
      </div>
  )
}

export default App
