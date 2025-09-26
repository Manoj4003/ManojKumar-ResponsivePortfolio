import React from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "./Navbar.css";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="custom-navbar">
      <Container>
        <Row className="w-100 align-items-center">
          {/* Brand */}
          <Col xs={6} md={3}>
            <Navbar.Brand href="#home" className="brand-wrapper fw-bolder fs-2">
              MANOJKUMAR A
            </Navbar.Brand>
          </Col>

          {/* Toggle + Links */}
          <Col xs={6} md={9} className="text-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto nav-links align-items-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Button className="lets-talk-btn ms-md-3 mt-2 mt-md-0">Let's Talk</Button>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
