import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [file, setFile] = useState()
  const hnadleUpload=(e)=>{
    const formData = new FormData()
    formData.append('file',file)
    axios.post('http://localhost:3000/upload',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  return (
    
    <>
      <div>
        <input type="file" onChange={e=> setFile(e.target.files[0])}/>
        <button onClick={hnadleUpload}>Upload</button>  
      </div>
    </>
  )
}

export default App
