import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import resume from "../../assets/MANOJKUMAR A -RESUME.pdf";
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Validate fields
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Auto-hide success message
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setSuccess(false);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSending(false);
      });
  };

  return (
    <section id="contact" className="contact-details-page mt-4">
      <Container>
        <h2 className="section-title">
          Contact <span className="highlight">Details</span>
        </h2>

        <Row className="contact-cards-row">
          {/* Left Side - Contact Details */}
          <Col md={4} sm={12}>
            <div className="contact-card contact-via-card">
              <h5>Contact Via</h5>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" aria-label="Email" />
                <a href="mailto:manojknr16@gmail.com">manojknr16@gmail.com</a>
              </div>

              <div className="contact-item">
                <FaLinkedin className="contact-icon" aria-label="LinkedIn" />
                <a
                  href="https://www.linkedin.com/in/manojkumar1608/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manojkumar A
                </a>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" aria-label="Phone" />
                <a href="tel:+916379209750">+91 6379209750</a>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" aria-label="Location" />
                <a
                  href="https://www.google.com/maps?q=Avinashi,+Tiruppur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avinashi, Tiruppur
                </a>
              </div>

              <div className="contact-item">
                <FaGithub className="contact-icon" aria-label="GitHub" />
                <a
                  href="https://github.com/Manoj4003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="contact-item">
                <FaDownload className="contact-icon" aria-label="Download CV" />
                <a href={resume} download className="download-cv">
                  Download CV
                </a>
              </div>
            </div>
          </Col>

          {/* Right Side - Contact Form */}
          <Col md={7} sm={12}>
            <div className="contact-card contact-form-card">
              <h5>Send a Message</h5>

              {success && (
                <Alert variant="success" className="mt-2">
                  ✅ Thank you! Your message has been sent successfully.
                </Alert>
              )}
              {sending && (
                <Alert variant="info" className="mt-2">
                  ⏳ Sending message...
                </Alert>
              )}

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

                <Button
                  type="submit"
                  className="btn contact-submit-btn"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-2"
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
