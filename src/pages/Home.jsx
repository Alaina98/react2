import React from 'react'
import axios from 'axios'


export default function Home() {
  return (
    <>
    <button onClick={users}>get Data</button>
    </>
  )
  function users(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      console.log(response.data)
  })
}
}
