
import { useState } from 'react';

import { api } from '../axios';

function Register() {

  const [formData,setFormData] = useState({
    fullname:'',
    email:'',
    password:'',
    phoneNumber:''
    
  })

  console.log(formData)
 

  return (


    <div>
      <form onSubmit={(e)=>{
      e.preventDefault()
      api().post('/user/signup',formData)
      .then((res)=>console.log(res))
    }}>

 
      <label>fullName</label> <br/>
      <input  type='text'  onChange={(e)=>setFormData({...formData,fullname:e.target.value})}/><br/>
      <label>email</label><br/>
      <input type='email' onChange={(e)=>setFormData({...formData,email:e.target.value})} /><br/>
      <label>password</label><br/>
      <input type='password' onChange={(e)=>setFormData({...formData,password:e.target.value})}/><br/>
      <label >phoneNumber</label><br/>
      <input type='number' onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} /><br/>
      <button type='submit'>Register</button><br/>
      </form>
    </div>







  )






}

export default Register;