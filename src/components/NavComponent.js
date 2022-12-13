import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

function NavComponent() {
  const state = useSelector((state)=> state.handleCart)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
    <Container>
      <Navbar.Brand as ={NavLink} to='/'>
      <img
            alt="brand"
            src="brand-logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            FASHION
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto mb-2 mb-lg-0">
          <Nav.Link as ={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as ={NavLink} to='/products'>Product</Nav.Link>
          <Nav.Link as ={NavLink} to='/about'>About</Nav.Link>
          <Nav.Link as ={NavLink} to='/contact'>Contact</Nav.Link>
        </Nav>
        <Nav className="d-flex">
        <Nav.Link as ={NavLink} to='/login'> Login</Nav.Link>
        <Nav.Link as ={NavLink} to='/register'>Register</Nav.Link>
        <Nav.Link as ={NavLink} to='/cart'>Cart [{state.length}]</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavComponent