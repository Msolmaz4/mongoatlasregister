import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Authen } from '../context/Auth'



const Detail = () => {

  const {id} = useParams()
  const {load}= useContext(Authen)
  console.log('detail',load)

//tek esittir yapacagiz
  const elem = load.find(er=>er.id = id)
  console.log('elem',elem)
 


  

  
  return (
    <div>
    {id}
   {
    elem.name
   }
   {elem.id}
   {elem.phone}

   
    </div>
  )
}

export default Detail