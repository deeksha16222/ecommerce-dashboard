
import Nav from 'react-bootstrap/Nav';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
    <div>
     <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
          <Link to ="/add">Add Product</Link>
          <Link to ="/update">Update Product</Link>
          <Link to = "/login"> Login</Link>
          <Link to = "/register">Register</Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
   )
}