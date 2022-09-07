import React,{useRef} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBase";


const Register = () => {


const emailRef = useRef()
const passwordRef =useRef()
const passwordCRef =useRef()


//burada firebase kullanmadan once async yapa,dim ama simfdi yapmak zoruindayim
//gecikme olursa diye


const handle= async(e)=>{
  e.preventDefault()
  //deneme amacli console.log(emailRef.current.value)
  try {
   
      //bunu degisken atadam consolda gormek ivicn atamasa olur
     const user=  await createUserWithEmailAndPassword(auth ,emailRef.current.value,passwordCRef.current.value)
     console.log(user)

    }
    
   catch (error) {
    
    console.log(error)
  }
 
}




  return (
    <div>
      <Form style={{ padding: "20vh" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  ref={passwordRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control type="password" placeholder="Password"  ref={passwordCRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Kurallari kabul ediyorum" />
        </Form.Group>
        <Link to="/register">
          <Button variant="primary" type="submit" style={{ margin: "5px" }} onClick={handle}>
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Register;
