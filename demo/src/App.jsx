import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [file, setFile] = useState()
  const [image, setImages] = useState([])

  const hnadleUpload=(e)=>{
    const formData = new FormData()
    formData.append('file',file)
    axios.post('http://localhost:3000/upload',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
    axios.get('http://localhost:3000/getImage')
    .then(res=>setImages(res.data[0].image))
    .catch(err=>console.log(err))
  }
  ,[])


  return (
    <>
      <div>
        <input type="file" onChange={e=> setFile(e.target.files[0])}/>
        <button onClick={hnadleUpload}>Upload</button>
        <br/>
        <img src={`http://localhost:3000/images/`+image} alt="image" style={{ width: '500px', height: '350px' }}/>
      </div>
    </>
  )
}

export default App
