import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa"; 
import './Footer.css'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  

  return (
    <footer className="footer-image-style py-5 mt-5">
      <Container>
        <Row className="justify-content-center">
          
          <Col xs={12} className="text-center mb-3">
            <div className="social-icons-group-image">
              
              <a 
                href="https://www.linkedin.com/in/manojkumar1608/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-circle mx-2"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn size={14} /> 
              </a>
                
              <a 
                href="https://github.com/Manoj4003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-circle mx-2"
                aria-label="GitHub Profile"
              >
                <FaGithub size={14} /> 
              </a>
              
              {/* === CORRECTED LINK FOR GMAIL COMPOSE === */}
              <a 
                href="manojknr16@gmail.com"
                target="_blank"           
                rel="noopener noreferrer"  
                className="social-icon-circle mx-2"
                aria-label="Email Me"
              >
                <FaEnvelope size={14} /> 
              </a>
              
              <a 
                href="https://x.com/sandymanoj2001?t=2iy6N8moME772QFJr7ODFA&s=08" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-circle mx-2"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={14} /> 
              </a>

            </div>
          </Col>
          
          <Col xs={12} className="text-center">
            <p className="image-copyright-text mb-0">
              &copy; Copyright. All rights reserved. 
            </p>
            <p className="small mb-0 mt-1 text-muted-extra">
                Manojkumar A. {currentYear}.
            </p>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
}