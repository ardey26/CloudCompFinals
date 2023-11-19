import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState("Text!")

  return (
    <>      
      <div id="todo-container">
        <h2>To-Do List</h2>
        <input type="text" id="task-input" placeholder="Add a new task..." value={item}/>
        <ul id="task-list"></ul>
        <button onclick="addTask()">Add Task</button>
      </div>
    </>
  )
}

export default App
