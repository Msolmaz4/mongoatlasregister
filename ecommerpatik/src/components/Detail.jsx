import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Authen } from '../context/Auth'



const Detail = () => {

  const {id} = useParams()
  const {load}= useContext(Authen)
  console.log('detail',load)


  const elem = load.find(er=>er.id === id)
  console.log(elem)


  

  
  return (
    <div>
    {id}
   {}
    </div>
  )
}

export default Detail