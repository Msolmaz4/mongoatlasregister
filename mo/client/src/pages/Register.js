
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

  
 

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>fullName</Form.Label>
        <Form.Control type="text" placeholder="Enter fullname" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone</Form.Label>
        <Form.Control type="number" placeholder="Enter phone NUMBER" />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;