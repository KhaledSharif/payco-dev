import React from "react";
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons"


function Header() {

  return (
<Navbar style={{backgroundColor:"#f3f3f3"}} variant="light">
        <Container>
        
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCirclePlus} style={{
              color: "#f70000"
          }} /> Payco</Navbar.Brand>
          <Nav >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button variant="light">Get Started</Button>
        </Container>
      </Navbar>
  );
}

export default Header;