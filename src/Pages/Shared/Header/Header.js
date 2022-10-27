import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex align-items-center">
              <NavLink className="text-decoration-none text-dark me-3" to="/">
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none text-dark me-3"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="text-decoration-none text-dark me-3"
                to="/faq"
              >
                FAQ
              </NavLink>
              <NavLink
                className="text-decoration-none text-dark me-3"
                to="/blog"
              >
                Blog
              </NavLink>
              <Nav.Link eventKey={2} href="#memes">
                Light Theme
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
