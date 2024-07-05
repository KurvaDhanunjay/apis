import { useEffect, useState } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data,setData]=useState();
  async function get(){
   
    await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res.data))
   
   }


 async function post(){
  const userData={
    name:"harish",
    place:"muddebihal"
  }
  await axios.post("https://jsonplaceholder.typicode.com/users",userData).then(res=>console.log(res))
 
 }


 async function put(){
  const userData={
    name:"harish",
    place:"muddebihal"
  }
  await axios.put("https://jsonplaceholder.typicode.com/users/1",userData).then(res=>console.log(res));
 
 }

  return (
   <>
   <h1>API METHODS</h1>
   <div className="buttons">
   <button style={{color:"black",backgroundColor:"white",padding:"4px",margin:"5px"}} onClick={get}>GET</button>
   <button style={{color:"black",backgroundColor:"white",padding:"4px",margin:"5px"}} onClick={post}>POST</button>
   <button style={{color:"black",backgroundColor:"white",padding:"4px",margin:"5px"}} onClick={put}>PUT</button>

   </div>
  
   
  

   
   </>
  )
}

export default App
