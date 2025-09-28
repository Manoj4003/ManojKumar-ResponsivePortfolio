import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// Ensure you have a placeholder for your resume PDF if needed, 
// or remove the resume button if it's not applicable here.
// import resume from "../../assets/MANOJKUMAR A -RESUME.pdf"; 
import heroImg from "../../assets/profile-photo.png"; 
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="portfolio_hero_wrapper" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Left Text Section - Stacks first on mobile (xs=12) */}
          <Col xs={12} md={6} className="hero-text text-center text-md-start mb-4 mb-md-0">
            <h1>
              <span className="hi-text">Hi! </span>
              <span className="name-text"> I'm Manojkumar</span>
            </h1>
            <h3>Front End Developer</h3>
            <p>
              I am a Front-End Developer dedicated to creating clean,
              responsive, and visually engaging web interfaces. Proficient in
              HTML, CSS, JavaScript, and React, I strive to deliver seamless
              user experiences and bring design concepts to life.
            </p>
            <div className="hero-buttons">
              <Button href="#about" className="d2c_secondary_btn me-2">Resume</Button>
              <Button href="#contact">Hire Me</Button>
            </div>
          </Col>

          {/* Right Image Section - Stacks second on mobile (xs=12) */}
          <Col xs={12} md={6} className="hero-image-col text-center">
            <div className="hero-image-wrapper">
              <img src={heroImg} alt="Manojkumar Profile" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;