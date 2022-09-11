import React from 'react'
import { useAuth } from './Auth'
import {Navigate} from 'react-router-dom'


//acik veya kapail olmasi durumda terse ceviririr
//bunu App.js duzenleme yap sarmallala
const RequierAuth = ({children}) => {
 
    const auth =useAuth()
    if(!auth.user){
        return <Navigate to='/login'/>
    }
     
  return children
}

export default RequierAuth