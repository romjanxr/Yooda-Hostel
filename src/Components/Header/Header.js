import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/foods">
          Yooda Hostel
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/foods">
              Foods
            </Nav.Link>
            <Nav.Link as={NavLink} to="/students">
              Students
            </Nav.Link>
            <Nav.Link as={NavLink} to="/distribution">
              Distribution
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
