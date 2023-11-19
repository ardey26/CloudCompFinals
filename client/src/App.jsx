import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState("Text!")

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <div class="grid grid-cols-5 gap-4">      
      <div className="border border-solid border-black p-4 inline-block">
        <h2 className='font-bold text-left'>Upload Picture</h2>
        <input className='border border-solid border-black rounded-lg' type="text" id="task-input" placeholder="Add a new task..." value={item} />
        <ul id="task-list"></ul>
        <button onclick="addTask()">Add Task</button>
      </div>
    </div>
  )
}

export default App
