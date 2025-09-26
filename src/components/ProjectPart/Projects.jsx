import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Projects.css';

import project1 from "../../assets/business-website.png";
import project2 from "../../assets/restaurant-villa-website.png";
import project3 from "../../assets/mexant-website.png";
import project4 from "../../assets/startupamp-website.png";

import project6 from "../../assets/hero_bg.png";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      image: project1,
      description: "A personal portfolio built with React and CSS.",
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-Commerce App",
      image: project2,
      description: "An online store built with React and Firebase.",
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/ecommerce-app",
    },
    {
      title: "Chat Application",
      image: project3,
      description: "Real-time chat app using React and Socket.io.",
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/chat-app",
    },
    {
      title: "Blog Platform",
      image: project4,
      description: "A blogging platform built with React and Node.js.",
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/blog-platform",
    },
    
    {
      title: "Todo App",
      image: project6,
      description: "A simple task management app using React.",
      demo: "https://your-demo-link.com",
      code: "https://github.com/yourusername/todo-app",
    },
  ];

  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-5">My Projects</h2>
      <Row className="g-4">
        {projectList.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mt-auto d-flex justify-content-between">
                  <Button
                    href={project.demo}
                    target="_blank"
                    variant="primary"
                  >
                    Demo
                  </Button>
                  <Button
                    href={project.code}
                    target="_blank"
                    variant="secondary"
                  >
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
