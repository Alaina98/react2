import React, { useState } from 'react'
import axios from 'axios'
export default function Images() {
    const [img,setImg] = useState("")
  return (
    <>
     <button onClick={getuser}>click</button>
     <br></br>
      <img src={img} />
    </>
  )
  function getuser(){
    axios.get("https://api.github.com/users/alaina98").then((res)=>{
      setImg(res.data.avatar_url)
      console.log(res.data.avatar_url)
    })
}
}
