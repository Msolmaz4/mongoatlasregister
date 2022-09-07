import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
//cikis yapmak icin
import { signOut } from 'firebase/auth'
import { auth } from './FireBase';

import AuthContext from './Auth';

function Todo() {

 const { current} = useContext(AuthContext)
 const [input,setInput] =useState()
 const [data,setData] = useState([])

 const handle =()=>{
    signOut(auth)
 }

  const handlen = (e)=>{
    e.preventDefault()
    setData([...data,{input}])
    console.log(setData)


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
      <div>
        <input type="text"  onChange={(e)=>setInput(e.target.value)}/>
        <Button onClick={handlen}> Save</Button>
        {
            data.map((er)=>(
                <div>{er.input}</div>
            ))
        }
      </div>
      
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