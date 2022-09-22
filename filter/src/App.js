
import {  useState } from 'react';
import './App.css';
import {data} from './data'

function App() {

 
  
const [ada,setAda]= useState()
 const [min,setMin] = useState()
 const [max,setMax] = useState()
 const [load,setLoad] = useState(data)




 const handle = ()=>{
  
  
    if(min => 0 || max || ada === 1 ){
      
console.log(ada)
  console.log(min)
    const deneme = load.filter((er)=>er.price > min) ||load.filter((er)=>er.price <max) || load.filter((er)=>er.categoryId === 1)
    setLoad(deneme)
    

  }
  else{
    alert('bulunamdi')
  }

  


 }




 






  return (
    <div className="App">
    <select name='typeVariant' onChange={(e)=>setAda(e.target.value)} >
      <option value='alle'>alle</option>
      <option value='1'>electro</option>
      <option value='2'>kleidung</option>
      <option value='3'>shchu</option>
    </select>
    <p>min</p>
    <input
     placeholder='min' 
     type='number'
     value={min}
     onChange={(e)=>setMin(e.target.value)}
     ></input>
    <p>max</p>
    <input
     placeholder='max' 
     type='number'
      value={max}
      onChange={(e)=>setMax(e.target.value)}
      ></input>
    <button onClick={()=>handle()}>search</button>
    {
      load.map((er)=>(
        <div>
          <ul>
            <td> {er.name}</td>
            <td> {er.content} </td>
            <td> {er.price} </td>
            <td> {er.typeVariant} </td>

          </ul>
         
        </div>
      ))
    }
    </div>
  );
}

export default App;
