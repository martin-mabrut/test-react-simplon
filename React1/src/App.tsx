import { useState, useRef } from 'react'
import './App.css'

function App() {

  interface Task {
    id: number,
    text: string
  }

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editValue, setEditValue] = useState("");
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [tasksDone, setTasksDone] = useState<number[]>([]);

  const compteurId = useRef(1); 

  function createTask() {

    const newTask: Task = { id: compteurId.current, text: input }

    compteurId.current++;

    const newTasksArray: Task[] = [...tasks, newTask];
    setTasks(newTasksArray)
  }

  function deleteTask(id: number) {
    const newTasksArray: Task[] = tasks.filter((task) => task.id !== id );
    setTasks(newTasksArray);
  }

  function updateTask(id: number, newText: string) {
    const newTasksArray: Task[] = tasks.map((task) => task.id === id ? {...task, text: newText} : task);
    setTasks(newTasksArray);
    setEditingTask(null);
  }

  function done (id: number, event: React.ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked
    if (isChecked) { 
      setTasksDone([...tasksDone, id]);
    } else {
      const newTasksDone = tasksDone.filter((element) => element!== id)
      setTasksDone(newTasksDone);
    }
  }

  return (
    <div className='max-w-xl mx-auto p-6'>
      <div className='flex gap-2 mb-4'>
        <input onChange={(event) => {
          const value = event.target.value;
          setInput(value);
          }
        }
        className='border rounded px-2 py-1 flex-1'>
        </input>
        <button onClick={createTask} className='border rounded px-3 py-1'>Valider</button>
      </div>

      <div className='flex flex-col gap-2'>
          {tasks.map((task) => (
            <div key={task.id} className='border rounded p-2 flex flex-wrap items-center gap-2'>
              <input type="checkbox" onChange={(event) => done(task.id, event)}></input>
              <p className={`flex-1 text-left ${tasksDone.includes(task.id) ?
              "line-through" : ""}`}>{task.text}</p>
              <button onClick={() => deleteTask(task.id)} className='border rounded px-2'>delete</button>
              <button onClick={() => setEditingTask(task.id)} className='border rounded px-2'>modifier</button>
              <div className={`w-full gap-2 ${task.id === editingTask ? "flex" : "hidden"}`}>
                <input onChange={(event) => {
                  const value = event.target.value;
                  setEditValue(value);
                }}
                className='border rounded px-2 flex-1'></input>
                <button onClick={() => updateTask(task.id, editValue)} className='border rounded px-2'>enregistrer</button>
              </div>
            </div>
          ))}

          
      </div>
      </div>
  )
}

export default App
