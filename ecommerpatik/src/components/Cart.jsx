import React ,{useContext} from 'react'
import { Authen } from '../context/Auth'



const Cart = () => {
const {load} = useContext(Authen)
console.log('card',load)

  return (
    <div>
{
  load.map((er)=>{
    return(
      <div>{er.name}</div>
    )
  })
}

  
  </div>
  )
}

export default Cart