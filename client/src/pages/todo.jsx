import { useState, useRef } from 'react'
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

function Todo() {
  const client = new S3Client({});
  
  const [item, setItem] = useState("");
  const [counter, setCounter] = useState(0);
  const [saved, setSaved] = useState([]);
  const [file, setFile] = useState(null);

  const hiddenFileInput = useRef(null);

  const handleFileUploadClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleFileUploadChange = (e) => {
    const fileUploaded = e.target.files[0];
    setFile(fileUploaded)    
  };

  function handleChange(e) {
    setItem(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!item) {
      return
    }
    
    if (file) {
      
      console.log(file)
      const { url } = await fetch("http://localhost:5000/s3-upload").then(res => res.json())
      console.log({url})

      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: file
      })

      const imageURL = url.split('?')[0]            

      let stateObject = null;
      if (item !== "") {
        stateObject = { id: counter, text: item, link: imageURL }  
      }
      else {
        stateObject = { id: counter, text: imageURL, link: imageURL }
      }
      setSaved([...saved, stateObject]);    

      setItem("")
      setFile(null);
      setCounter(counter + 1)
    }

    else {      
        const stateObject = { id: counter, text: item }
        setSaved([...saved, stateObject]);        
        setItem("");    
        setCounter(counter + 1)            
    }
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
        <h2 className='font-bold text-left mb-2 pb-2 border-b border-black pt-4 rounded-t-lg px-4 bg-green-300'>Add task </h2>
        <div className='px-4'>
        <input className='border border-solid border-black w-full h-[100px] pl-2 rounded-lg' type="text" id="task-input" placeholder="Add a new task..." value={item} onChange={handleChange} />        
          <div className='flex justify-between gap-4'>
            <input type="file" className='hidden' onChange={handleFileUploadChange} ref={hiddenFileInput} />

            <button onClick={handleFileUploadClick} className='mt-4 rounded-lg border p-2 border-solid border-black hover:bg-green-300 hover:text-white duration-100 transition-colors w-full'>              
              { file ? (<i className="fa-solid fa-check"></i>) : "Upload"}
              </button>
            <button disabled={item == ""} onClick={handleSubmit} className='mt-4 w-full disabled:bg-gray-500 disabled:text-white rounded-lg border p-2 border-solid border-black hover:bg-green-300 hover:text-white duration-100 transition-colors'>Submit</button>
          </div>
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
              { item.link ? (<a href={item.link} className='font-medium text-left break-words px-4 text-blue-500' id={ item.id }>{ item.text }</a>) : (<h2 className='font-medium text-left break-words px-4' id={ item.id }>{ item.text }</h2>)}
                
                
              
              
          </div>
          )
        })
      }
    </div>
  )
}

export default Todo
