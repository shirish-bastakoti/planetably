import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
    return (
        <>
           <Navbar  expand="lg" variant="dark" sticky="top" className="py-3 navbg">
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link href="#company">Company</Nav.Link>
        <Nav.Link href="#scope">Scope</Nav.Link>
        <Nav.Link href="#team">OurTeam</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
            
        </>
    )
}

export default NavBar
