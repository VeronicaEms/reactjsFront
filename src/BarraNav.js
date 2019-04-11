import React, { Component } from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import logo from './people.png';


class BarraNav extends Component {
    render() {
        return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img src={logo} alt="logo"></img>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
               <Nav.Link  eventKey={1} href="/">Home</Nav.Link>
               <Nav.Link  eventKey={2} href="./Cadastro">Cadastro</Nav.Link>
               <Nav.Link  eventKey={3} href="./Contact">Contato</Nav.Link>
               </Nav>
               <Nav className="ml-auto">
               <Nav.Link  eventKey={4} href="./Login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
             
        )
    }     
}

export default BarraNav;
