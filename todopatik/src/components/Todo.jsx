import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
//cikis yapmak icin
import { signOut } from 'firebase/auth'
import { auth } from './FireBase';

import AuthContext from './Auth';

function Todo() {

 const { current} = useContext(AuthContext)

 const handle =()=>{
    signOut(auth)
 }


  return (
    <Navbar>
     

    { current ? 
       <div>
        <Container>
        <Navbar.Brand href="#home">TO DO </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {current.displayName}
          </Navbar.Text>
        </Navbar.Collapse>
        <Button onClick={handle}> Logout</Button>
      </Container>
       </div>:(
        <div>
             <Button> login</Button>
        </div>
       )

        }
        
    </Navbar>
  );
}

export default Todo;