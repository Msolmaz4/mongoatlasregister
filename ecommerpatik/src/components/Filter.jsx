import React,{useContext} from 'react'
import { Authen } from '../context/Auth'

const Filter = () => {

  const {selectRef,minRef,maxRef,handle1} = useContext(Authen)

  return (
    <div>

    <p>filter</p>

    <select ref={selectRef}>

      <option value="1">alle</option>
      <option value="2">electro</option>
      <option value="3">car</option>
      <option value="4">Hause</option>
      <option value="5">garten</option>
      <option value="6">baby</option>
    </select>
    <h1>min</h1>
    <input type="number"
    ref={minRef}
     /> && 
    <h1>max</h1>
    <input type="number" 
    ref={maxRef} />
    <button onClick={handle1}>search</button>


    </div>
  )
}

export default Filter