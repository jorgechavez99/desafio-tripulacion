import axios from 'axios'
import React, { useState } from 'react'

export const InputExcel = () => {
    const [file, setFile] = useState()
    const subir=()=>{
        const formData= new FormData()
        formData.append('file',file)
        axios.post('http://localhost:5000/upload',formData).then( res => {}).catch(er => console.log(er))
    }
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type='button' onClick={subir}>Subir Excel</button>
    </div>
  )
}

