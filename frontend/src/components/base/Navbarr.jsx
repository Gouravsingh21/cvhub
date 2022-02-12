import React, { Component } from "react";
import './css/navbar.css';
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";

export default class Navbarr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">PortFolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Templates</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#resume">Portfolio</Nav.Link>
                <Nav.Link  href="/resume">
                  resumes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
