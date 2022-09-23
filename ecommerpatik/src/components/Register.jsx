import React, { useContext } from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Authen } from '../context/Auth';



const Register = () => {

 const {email,setEmail,password,setPassword,name,handle3,setName} = useContext(Authen)

  return (
    <div>
 <div className='log'>
      <div className='recht'>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className='left'>
        sol
      </div>
      <Form onSubmit={handle3} >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control  placeholder='name eingeben' value={name} onChange={(e)=>setName(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control  placeholder="email@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Col>
      </Form.Group>

      <Button variant="primary" size="lg" type='submit' onClick={handle3}>
          REGISTER
        </Button>
    </Form>

    </div>

    </div>
  )
}

export default Register