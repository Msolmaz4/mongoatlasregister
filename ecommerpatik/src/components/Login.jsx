import React, { useContext } from 'react'
import {Authen} from '../context/Auth'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


import {motion} from 'framer-motion'

const Login = () => {


const {setMail,mail,pass,setPass,handle2} =useContext(Authen)



  return (
    <div className='log'>
      <div className='recht'>
     
      <motion.div animate={{ 
        rotate:[0,200,200,0],
        x:[0,200,200,0,-200,-200,0]
      }}
       transition={{repeat:Infinity,duration:1}}
      >
      <div className='der'></div>
      </motion.div>
      </div>
      <div className='link'>
      
      <Form onSubmit={handle2}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control  placeholder="email@example.com" value={mail} onChange={(e)=>setMail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} />
        </Col>
      </Form.Group>

      <Button variant="primary" size="lg" type='submit' onClick={handle2}>
          LOGIN
        </Button>
    </Form>
    </div>

    </div>
  )
}

export default Login