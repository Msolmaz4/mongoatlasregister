import React, { useState } from 'react'
import { useAuth } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

//  input ve button yazpilit once
/**
 *   <label>
    
    Username : {''} 
    <input type='text' value={user} onChange={(e)=>setUser(e.target.value)}/>
    </label>
   <button onClick={handleLogin}>Login</button>
 * sonra auth  ytanimlariy
   sonra foksiyonu yazdik auth.login (user) iuser inputtan gekdi
 */
const Login = () => {

     const navi = useNavigate()

    const auth = useAuth()
     const [user,setUser] =useState('')

     const handleLogin =()=>{
        auth.login(user)
        navi('/')

     }

  return (
    <div>

    <label>
    
    Username : {''} 
    <input type='text' value={user} onChange={(e)=>setUser(e.target.value)}/>
    </label>
   <button onClick={handleLogin}>Login</button>



    </div>
  )
}

export default Login