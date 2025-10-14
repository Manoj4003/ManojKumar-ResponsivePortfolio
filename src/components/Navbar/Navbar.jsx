import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="custom-navbar">
      <Container className="d-flex align-items-center justify-content-between">
        {/* Brand + Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div className="logo-circle">MK</div>
          <span className="brand-wrapper ms-2">MANOJKUMAR A</span>
        </Navbar.Brand>

        {/* Toggler (for mobile) */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Nav Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
