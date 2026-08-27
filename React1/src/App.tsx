import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState<string[]>([]);

  function createCard() {
    const newCardsArray: string[] = [...cards, input];
    setCards(newCardsArray)
  }

  function deleteCard(text: string) {
    const newCardsArray: string[] = cards.filter((card) => card!== text);
    setCards(newCardsArray);
  }

  function updateCard(oldText: string, newText: string) {
    const newCardsArray: string[] = cards.map((card) => card === oldText ? newText : card);
    setCards(newCardsArray);
  }

  return (
    <div>
      <input onChange={(event) => {
        const values = event.target.value;
        setInput(values);
        }
      }
      >
      </input>
      <button onClick={createCard}>Valider</button>

      <div>
          {cards.map((card) => (
            <div key={card}>
              <p>{card}</p>
              <button onClick={() => deleteCard(card)}>delete</button>
            </div>
          ))}

          
      </div>
      </div>
  )
}

export default App
