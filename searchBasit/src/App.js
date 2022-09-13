import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [ load,setLoad] = useState([])
  const [input,setInput] =useState('')
  const [filter,setFilter] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>setLoad(res.data))
  },[])

  useEffect(()=>{
    setFilter(
      load.filter((er)=>er.name.toLowerCase().includes(input.toLowerCase()))
    )



  },[load,input])
 
  console.log(input)

  return (
    <div className="App">

      <input type='search'  onChange={(e)=>setInput(e.target.value)}/>
      {filter.length === 0
       ? <div style={{color:'red'}}> es gibt estwas nicht</div>
       : filter.map((el)=>(
          <div>
            {el.name}
          </div>
        ))
      }


      
      


  
    </div>
  );
}

export default App;
