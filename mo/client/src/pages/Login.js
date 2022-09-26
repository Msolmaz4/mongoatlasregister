
import React, {useState} from 'react'

function Register() {

  const [formdata,setFormdata]= useState({
    email:'',
    password:''
  })


console.log(formdata)

  return (
  

  <div>
    <form>
      <div>
      <label>email </label><br/>
      <input type='email' onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/><br />
      
      </div>
     <div>
     <label>password</label><br />
      <input type='password'  onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/><br/>
      <button>login</button>
     </div>
  
    </form>
    </div>
    

   
  )
}

export default Register