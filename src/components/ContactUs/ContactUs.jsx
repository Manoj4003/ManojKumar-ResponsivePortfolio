import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt, FaGithub, FaDownload } from "react-icons/fa";
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData); // Replace with API/email logic
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="contact-details-page mt-5">
      <Container>
        <h2 className="section-title">
          Contact <span className="highlight">Details</span>
        </h2>

        <Row className="contact-cards-row">
          {/* Contact Via Section */}
          <Col md={4} sm={12}>
            <div className="contact-card contact-via-card">
              <h5>Contact Via</h5>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:manojknr16@gmail.com">manojknr16@gmail.com</a>
              </div>

              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/manojkumar1608/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manojkumar A
                </a>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+916379209750">+91 6379209750</a>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <a
                  href="https://www.google.com/maps?q=12.9716,77.5946"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avinashi, Trippur
                </a>
              </div>

              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <a
                  href="https://github.com/Manoj4003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="contact-item">
                <FaDownload className="contact-icon" />
                <a href="/ManojKumar_CV.pdf" download className="download-cv">
                  Download CV
                </a>
              </div>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col md={7} sm={12}>
            <div className="contact-card contact-form-card">
              <h5>Send a Message</h5>
              {success && <Alert variant="success">Message sent successfully!</Alert>}
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Send Message</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
