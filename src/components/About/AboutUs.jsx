import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from '../../assets/about-us.webp';
import resume from '../../assets/MANOJKUMAR A -RESUME.pdf';
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="about-image">
           <img src={about} alt="Aboutus" />
          </Col>
          <Col md={7} className="about-text">
            <h2>About Me</h2>
            <p>
              I’m a passionate <strong>Front-End Developer</strong> focused on
              building <strong>responsive</strong>, user-friendly, and modern web
              applications. I enjoy turning ideas into digital experiences that
              delight users and solve real problems.
            </p>

            <h3>What I Do</h3>
            <p>
              I specialize in <strong>React, JavaScript, HTML, CSS</strong>, and
              modern web development frameworks. I create dynamic and accessible
              websites with clean, efficient code. Whether designing sleek
              interfaces or optimizing performance, I deliver high-quality
              solutions.
            </p>

            <div className="contact-details">
              <p><strong>Name:</strong> Manoj Kumar A</p>
              <p><strong>Age:</strong> 24</p>
              <p><strong>Email:</strong> manojknr16@gmail.com</p>
              <p><strong>Address:</strong> 2/90 Avinashi, Trippur</p>
            </div>

            <div className="hero-buttons">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <a href={resume}><button >Download Resume</button></a>  
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
