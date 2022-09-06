import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>



<Form style={{padding:'20vh'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password Confirm</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Kurallari kabul ediyorum" />
      </Form.Group>
      <Link to='/register'><Button variant="primary" type="submit" style={{margin:'5px'}}>
        Register
      </Button>
      
      </Link>
     
    </Form>


    </div>
  )
}

export default Register