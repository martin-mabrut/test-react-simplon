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
      >
      </input>
      <button onClick={createCard}>Valider</button>

      <div>
          {cards.map((card) => (
            <p key={card}>{card}</p>
          ))}
      </div>
      </div>
  )
}

export default App
