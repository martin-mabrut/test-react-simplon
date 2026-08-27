import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [cards, setCards] = useState<string[]>([]);
  const [editValue, setEditValue] = useState("");
  const [editingCard, setEditingCard] = useState<string | null>(null);

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
        const value = event.target.value;
        setInput(value);
        }
      }
      className='border'>
      </input>
      <button onClick={createCard} className='border'>Valider</button>

      <div>
          {cards.map((card) => (
            <div key={card}>
              <input type="checkbox"></input>
              <p>{card}</p>
              <button onClick={() => deleteCard(card)} className='border'>delete</button>
              <input onChange={(event) => {
                const value = event.target.value;
                setEditValue(value);
              }}
              className={` border ${card === editingCard ? "flex" : "hidden"}`}></input>
              <button onClick={() => setEditingCard(card)} className='border'>modifier</button>
              <button onClick={() => updateCard(card, editValue)} className='border'>enregistrer</button>
            </div>
          ))}

          
      </div>
      </div>
  )
}

export default App
