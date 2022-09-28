import React, { useContext, useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Authen } from "../context/Auth";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  /*console.log('dene',name,email,password)*/

  const { handle3 } = useContext(Authen);
  useEffect(()=>{
    handle3()
  },[name,email,password])

  const handle4 = (e) => {
    e.preventDefault();
   if(name && email&& password){
    handle3(name, email, password);
    setName('')
    setEmail('')
    setPassword('')
   }else{
    alert('bosluk var')
   }
   
  };

  return (
    <div>
      <div className="log">
        <div className="recht">
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div className="left">sol</div>
        <Form onSubmit={(e) => handle4(e)}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="name eingeben"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>

          <input variant="primary" size="lg" type="submit" value='Register'/>
         
        </Form>
      </div>
    </div>
  );
};

export default Register;
