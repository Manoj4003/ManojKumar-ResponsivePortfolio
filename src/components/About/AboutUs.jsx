import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGithub,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import about from "../../assets/about-us.webp";
import resume from "../../assets/MANOJKUMAR A -RESUME.pdf";
import "./AboutUs.css";

function AboutUs() {
  const addressQuery = "2/90 Avinashi, Trippur";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`;

  return (
    <section className="about-section mt-5" >
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="about-image">
            <img src={about} alt="About Me" />
          </Col>
          <Col md={7} className="about-text">
            <h2>About Me</h2>
            <p>
              I’m a passionate <strong>Front-End Developer</strong> focused on
              building <strong>responsive</strong>, user-friendly, and modern
              web applications. I enjoy turning ideas into digital experiences
              that delight users and solve real problems.
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
              <Row>
                <Col md={6} sm={12}>
                  <p>
                    <FaUser /> <strong>Name:</strong> Manoj Kumar A
                  </p>
                </Col>
                <Col md={6} sm={12}>
                  <p>
                    <FaCalendarAlt /> <strong>Age:</strong> 24
                  </p>
                </Col>
                <Col md={6} sm={12}>
                  <p>
                    <FaEnvelope /> <strong>Email:</strong>{" "}
                    <a href="mailto:manojknr16@gmail.com">
                      manojknr16@gmail.com
                    </a>
                  </p>
                </Col>
                
                {/* 📍 Clickable Address/Map Link */}
                <Col md={6} sm={12}>
                  <p>
                    <FaMapMarkerAlt /> <strong>Address:</strong>{" "}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      2/90 Avinashi, Trippur
                    </a>
                  </p>
                </Col>
                
                {/* 🖥️ Shortened GitHub Link */}
                <Col md={6} sm={12}>
                  <p>
                    <FaGithub /> <strong>GitHub:</strong>{" "}
                    <a
                      href="https://github.com/Manoj4003"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Manoj4003
                    </a>
                  </p>
                </Col>

                {/* 🔗 Shortened LinkedIn Link */}
                <Col md={6} sm={12}>
                  <p>
                    <FaLinkedin /> <strong>LinkedIn:</strong>{" "}
                    <a
                      href="https://www.linkedin.com/in/manojkumar1608/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /in/manojkumar1608/
                    </a>
                  </p>
                </Col>
              </Row>
            </div>

            <div className="hero-buttons">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button>Download Resume</button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;