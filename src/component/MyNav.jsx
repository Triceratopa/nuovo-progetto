import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyNavRight from './MyNavRight'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";


function MyNav() {
    return (
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand href=""><img src={logo} alt="logo" style={{height:'60px', width:'100px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link  className="text-white nav-link" to="/">Home</Link>
              <Link  className="text-white nav-link" to="/tv-shows">Serie Tv</Link>
              <Nav.Link href="#" className="text-white">
                Film
              </Nav.Link>
              <NavDropdown title={
        <span className="text-white my-auto">Info</span>
    } id="navbarScrollingDropdown" className="text-white border-white bg-body-white" >
                <NavDropdown.Item href="#action3">Acccount</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Help
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
        <MyNavRight/>
      </Navbar>
    );
  }
  
  export default MyNav;