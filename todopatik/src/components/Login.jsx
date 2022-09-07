import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom'



function Login() {
  
  const emailRef =useRef()
  const passwordRef =useRef()


  

 const handle =(e)=>{
  e.preventDefault()
  console.log(emailRef.current.value,passwordRef.current.value)
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
