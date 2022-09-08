import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
//cikis yapmak icin
import { signOut } from 'firebase/auth'
import { auth } from './FireBase';
import { nanoid } from 'nanoid'

import AuthContext from './Auth';

function Todo() {

 const { current} = useContext(AuthContext)
 const [input,setInput] =useState('')
 const [data,setData] = useState([])

 const handle =()=>{
    signOut(auth)
 }

  const handlen = (e)=>{

    e.preventDefault()
    
    const newData= {
      id:nanoid(),
      text:input
    }


    setData([...data,newData])
    setInput('')
    
      
    console.log(setData)


  }

  const delet = (e,id)=>{
    const newData = data.filter((el)=>el.id !== id)
    console.log(newData)
    setData(newData)
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
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <Button onClick={handlen}>ekle</Button>
        {
            data.map((er)=>(
                <div >{er.text}
                {er.id}
                <button onClick={(e)=>delet(e,er.id)}>silmek</button>
             
                </div>
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