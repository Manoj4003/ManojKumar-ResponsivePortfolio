import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="custom-navbar">
      <Container>
        {/* Brand + Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle bg-white text-dark d-flex align-items-center justify-content-center fw-bold"
            style={{ width: "2.2rem", height: "2.2rem", fontSize: "0.9rem" }}
          >
            MK
          </div>
          <span className="brand-wrapper">MANOJKUMAR A</span>
        </Navbar.Brand>

        {/* Toggler (for mobile) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Nav Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
