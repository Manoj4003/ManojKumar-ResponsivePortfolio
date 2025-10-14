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
import ContactUs from "../ContactUs/ContactUs";

function HeroSection() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Manojkumar_A_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:manojknr16@gmail.com";
    }
  };

  return (
    <>
      <AppNavbar />

      <section className="portfolio_hero_wrapper" id="home">
        <Container>
          <Row className="align-items-center">
            {/* Text Section */}
            <Col
              xs={12}
              md={6}
              className="hero-text text-center text-md-start mb-4 mb-md-0 animate-slideup"
            >
              <h1>
                <span className="hi-text">Hi! </span>
                <span className="name-text">I'm Manojkumar</span>
              </h1>
              <h3>Front End Developer</h3>
              <p>
                I am a Front-End Developer passionate about building clean,
                responsive, and interactive user experiences using modern web
                technologies like React, JavaScript, HTML, and CSS.
              </p>
              <div className="hero-buttons">
                <Button
                  onClick={handleResumeDownload}
                  className="btn resume-btn me-2"
                >
                  Resume
                </Button>
                <Button onClick={handleGetInTouch} className="btn contact-btn">
                  Get in Touch
                </Button>
              </div>
            </Col>

            {/* Image Section */}
            <Col xs={12} md={6} className="hero-image-col text-center">
              <div className="hero-image-wrapper floating">
                <img src={heroImg} alt="Manojkumar Profile" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Other Sections */}
      <AboutUs />
      <Education />
      <Skills />
      <Projects />
      <ContactUs />
    </>
  );
}

export default HeroSection;
