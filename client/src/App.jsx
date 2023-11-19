import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState("");
  const [counter, setCounter] = useState(0);
  const [saved, setSaved] = useState([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const stateObject = { id: counter, text: item }
    setSaved([...saved, stateObject]);        
    setItem("");    
    setCounter(counter + 1)
  }
  
  function handleDelete(id) {
    const newSaved = saved.filter((item) => {
      return item.id != id
    })

    setSaved(newSaved);

  }
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">      
      <div className="border border-solid border-black p-4 inline-block">
        <h2 className='font-bold text-left'>Upload Picture</h2>
        <input className='border border-solid border-black rounded-lg' type="text" id="task-input" placeholder="Add a new task..." value={item} onChange={handleChange} />
        <ul id="task-list"></ul>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
      {
        saved.map((item) => {
          return (
            <div className="border border-solid border-black p-4 inline-block">
            <h2 className='font-bold text-left' id={ item.id }>{ item.text }</h2>        
            <button onClick={() => handleDelete(item.id)}> X </button>                            
          </div>
          )
        })
      }
    </div>
  )
}

export default App
