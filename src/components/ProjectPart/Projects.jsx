import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import './Projects.css';

import project1 from "../../assets/business-website.png";
import project2 from "../../assets/restaurant-villa-website.png";
import project3 from "../../assets/mexant-website.png";
import project4 from "../../assets/startupamp-website.png";
import project5 from "../../assets/hero_bg.png";
import project6 from "../../assets/hero_bg.png";

const Projects = () => {
  const projectList = [
    {
      title: "Smart Business Site",
      image: project1,
      description: "A modern, responsive business website showcasing services, portfolio, team, and contact sections.",
      techUsed: ["HTML", "CSS", "JavaScript" ,"Bootstrap"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Villa Agency",
      image: project2,
      description: "A responsive real estate website template featuring property listings, detail pages, and a contact form.",
      techUsed: ["HTML", "CSS", "JavaScript" ,"Bootstrap"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/ecommerce-app",
    },
    {
      title: "Mexant Business",
      image: project3,
      description: "A multipage business website template with hero carousel, product and testimonial sections, and a contact form.",
      techUsed: ["HTML", "CSS", "JavaScript" ,"React"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/chat-app",
    },
    {
      title: "StartupAMP Business School",
      image: project4,
      description: "A professional website template for business schools with courses, team, and contact sections, optimized for mobile.",
      techUsed: ["React", "Node.js", "MongoDB"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/blog-platform",
    },
    {
      title: "Todo App",
      image: project5,
      description: "A simple task management app using React.",
      techUsed: ["React", "CSS"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/todo-app",
    },
    {
      title: "Portfolio Hero",
      image: project6,
      description: "Personal portfolio hero section built with React.",
      techUsed: ["React", "CSS", "Bootstrap"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/todo-app",
    },
  ];

  return (
    <Container fluid id="projects" className="my-5 projects">
      <h2 className="text-center mb-5">My <span className="span-color">Projects</span></h2>
      <Row className="g-4 justify-content-center">
        {projectList.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <Card className="h-100 shadow-sm project-card">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className="card-img-top"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                
                {/* Display Technologies */}
                <div className="mb-3">
                  {project.techUsed.map((tech, idx) => (
                    <Badge bg="secondary" key={idx} className="me-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto d-flex justify-content-between">
                  <Button href={project.demo} target="_blank" variant="primary">
                    Demo
                  </Button>
                  <Button href={project.code} target="_blank" variant="secondary">
                    Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
