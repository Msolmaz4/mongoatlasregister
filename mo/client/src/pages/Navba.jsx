import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom'
import {useEffect} from 'react'

function Navba( {user, setUser}) {
    // Sayfazyi yenileyince firis yap geliyor bunda usseefefect ile zapariy

    
useEffect(() => {
    if(localStorage.getItem('user') && !user){
        setUser(JSON.parse(localStorage.getItem('user')))

    }

}, [])

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                hakkimizda
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

{
    user ? <>
    <Button variant="primary" size="lg" onClick={(e)=>{
        localStorage.removeItem(user)
        setUser('')
    }}> cikis yap</Button>
    </>
    :
    <>
        <Link to='/register'>
        <Button variant="primary" size="lg"  >
        register
      </Button>{'   '}
        </Link>
      <Link to='/login'>
      <Button variant="primary" size="lg">
        Login
      </Button>{' '}
      </Link>
    </>


}

      
    
      </Container>
    </Navbar>
  );
}

export default Navba;