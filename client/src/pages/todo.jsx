import { useState } from 'react'

function Todo() {
  const [item, setItem] = useState("");
  const [counter, setCounter] = useState(0);
  const [saved, setSaved] = useState([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) {
      return
    }
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
      <div className="border border-solid rounded-lg border-black pb-4 inline-block flex flex-col">
        <h2 className='font-bold text-left mb-2 pb-2 border-b border-black pt-4 rounded-t-lg px-4 bg-green-300'>Add task</h2>
        <div className='px-4'>
        <input className='border border-solid border-black w-full h-[100px] pl-2 rounded-lg' type="text" id="task-input" placeholder="Add a new task..." value={item} onChange={handleChange} />
        <ul id="task-list"></ul>
        <button onClick={handleSubmit} className='ml-auto mt-4 rounded-lg border p-2 border-solid border-black hover:bg-green-300 hover:text-white duration-100 transition-colors'>Submit</button>
        </div>
      </div>
      {
        saved.map((item) => {
          return (
            <div className="border border-solid rounded-lg border-black pb-2 inline-block  flex flex-col">
              <div className='bg-blue-300 rounded-t-lg pt-2 pb-4 flex'>
                <button className='text-white font-bold ml-auto mr-4' onClick={() => handleDelete(item.id)}> X </button>                            
              </div>
              <div className='border-t border-black'> </div>
              <h2 className='font-medium text-left break-words px-4' id={ item.id }>{ item.text }</h2>                    
          </div>
          )
        })
      }
    </div>
  )
}

export default Todo
