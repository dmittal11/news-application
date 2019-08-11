import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
const NavBar = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link style={{color: 'white'}} to={'/home'}>
            Home
          </Link>    
        </Navbar.Brand>
          
        <Nav className="mr-auto">
            <Nav.Link style={{color: 'white'}} href={'/top-headlines'}>
              Top Headlines
            </Nav.Link>
            <Nav.Link style={{color: 'white'}} href={'/everything'}>
              Everything
            </Nav.Link>
            <Nav.Link style={{color: 'white'}} href={'/sources'}>
              Sources
            </Nav.Link>
        
        </Nav>
      </Navbar>
      </>
    )
}

export default NavBar;
