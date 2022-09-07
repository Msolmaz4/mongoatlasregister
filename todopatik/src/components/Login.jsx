import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth} from './FireBase'
import { useNavigate } from 'react-router-dom'





function Login() {
  
  const emailRef =useRef()
  const passwordRef =useRef()
  const navi =useNavigate()


  

 const handle = async(e)=>{
  e.preventDefault()
  //console.log(emailRef.current.value,passwordRef.current.value)

  try {
    const user = await signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
  console.log(user)
  navi('/todo')
  } catch (error) {
    alert(error)
  }
  
 }




  return (
    <div className='home'>

   
    <Form style={{padding:'20vh'}} onSubmit={handle}>

    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  ref={emailRef}/>
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>

     
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Kurallari kabul ediyorum"    />
      </Form.Group>
    
     
      <Link to='/register'><Button variant="primary" type="submit" style={{margin:'5px'}}>
        Register
      </Button>
      </Link>
      
      <Link to='/login'> <Button variant="primary" type="submit" onClick={handle}>
    Login
      </Button>
      </Link>
     
    </Form>
    </div>
  );
}

export default Login;
