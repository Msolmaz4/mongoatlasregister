
import React, {useState} from 'react'
import {api} from '../axios'
import {useNavigate} from 'react-router-dom'

function Login({setUser}) {
  
  const navi = useNavigate()

  const [formdata,setFormdata]= useState({
    email:'',
    password:''
  })
  console.log(formdata)
  
  
/*
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')

console.log(email,password)
*/
  return (
  

  <div>
    <form onSubmit={(e)=>{
      e.preventDefault()
     api().post('/user/signin',formdata)
     // once bun yap consolda g;r .then((res)=>console.log(res))
     //localda tuutunuy hersey string olmali

    

   
  
     .then((res)=>{
      localStorage.setItem('user',JSON.stringify(res.data.user))
      setUser(res.data.user)
      navi('/')

     })
     
      .catch((err)=>console.log(err))
    }}>
      <div>
      <label>email </label><br/>
      <input type='email' 
      
     onChange={(e)=>setFormdata({...formdata,email:e.target.value})}
      /><br />
      
      </div>
     <div>
     <label>password</label><br />
      <input type='password' 
      

      onChange={(e)=>setFormdata({...formdata,password:e.target.value})}
       /><br/>
      <button type='submit'>login</button>
     </div>
  
    </form>
    </div>
    

   
  )
}

export default Login