import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import resumePDF from "../../assets/MANOJKUMAR A -RESUME.pdf"; 
import heroImg from "../../assets/profile-photo.png"; 
import "./HeroSection.css";

import AppNavbar from "../Navbar/Navbar";
import AboutUs from "../About/AboutUs";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Projects from "../ProjectPart/Projects";
import ContactPage from "../ContactUs/ContactUs";


function HeroSection() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = "Manojkumar_A_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <AppNavbar />

      <section className="portfolio_hero_wrapper" id="home">
        <Container>
          <Row className="align-items-center">
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
                <Button onClick={handleResumeDownload} className="d2c_secondary_btn me-2">
                  Resume
                </Button> 
                <Button href="#contact">Hire Me</Button> 
              </div>
            </Col>
            <Col xs={12} md={6} className="hero-image-col text-center">
              <div className="hero-image-wrapper">
                <img src={heroImg} alt="Manojkumar Profile" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Other sections */}
      <AboutUs />
      <Education />
      <Skills />
      <Projects />
      <ContactPage />
      
    </>
  );
}

export default HeroSection;
