import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/foods">Yooda Hostel</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/foods">Foods</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/distribution">Distribution</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
