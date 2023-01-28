import { useState } from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



const Component = () => {
  const [username, setUsername] = useState("aarushi")

  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="">CounterOffer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="float-end">
        
          <Nav className="me-auto">
            <Nav.Link href=""> Home </Nav.Link>
            <Nav.Link href=""> Cases </Nav.Link>
          </Nav>
              
          <Nav>
            <Navbar.Text>Hi {username}</Navbar.Text>
            <Nav.Item><Button>Log Out</Button></Nav.Item>
          </Nav>

        </Navbar.Collapse>
        
    </Navbar>
    

  )
}

export default Component
