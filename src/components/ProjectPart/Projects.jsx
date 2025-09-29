import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import './Projects.css';

import project1 from "../../assets/business-website.png";
import project2 from "../../assets/restaurant-villa-website.png";
import project3 from "../../assets/mexant-website.png";
import project4 from "../../assets/startupamp-website.png";
import project5 from "../../assets/portfolio.png";
import project6 from "../../assets/hero_bg.png";

const Projects = () => {
  const projectList = [
    {
      title: "Smart Business Site",
      image: project1,
      description: "A modern, responsive business website showcasing services, portfolio, team, and contact sections.",
      techUsed: ["HTML", "CSS", "JavaScript" ,"Bootstrap"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/Manoj4003/Business_project_with_mobile_responsive_updated_project",
    },
    {
      title: "Villa Agency",
      image: project2,
      description: "A responsive real estate website template featuring property listings, detail pages, and a contact form.",
      techUsed: ["HTML", "CSS", "JavaScript" ,"Bootstrap"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/Manoj4003/Restaurant-villa-with-mobile-responsive",
    },
    {
      title: "Mexant Business",
      image: project3,
      description: "A business template with multipage structure, hero carousel, product sections, and a contact form.",
      techUsed: ["HTML", "CSS", "JavaScript" ,"React"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/Manoj4003/mexant-website-using-react-with-mobile-view",
    },
    {
      title: "StartupAMP Business School",
      image: project4,
      description: "A professional website template for business schools with courses, team, and contact sections, optimized for mobile.",
      techUsed: ["HTML","CSS","JavaScript"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/Manoj4003/StartUp-website-with-mobile-responsive",
    },
    {
      title: "Personal Portfolio",
      image: project5,
      description: "A sleek personal portfolio showcasing skills, projects, and experience with an interactive design, fully responsive across all devices.",
      techUsed: ["React", "CSS","JavaScript","React"],
      demo: "https://your-demo-link.com",
      code: "https://github.com/Manoj4003/ManojKumar-ResponsivePortfolio",
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
    // 🎯 WRAPPER: This outer div will take the full width and the background color
    <div className="projects-section-wrapper mt-3" id="projects"> 
      {/* Container class moves from here */}
      <Container className="my-5 projects"> 
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
                  
                  <div className="mb-3 tech">
                    {project.techUsed.map((tech, idx) => (
                      <Badge bg="secondary" key={idx} className="me-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto d-flex justify-content-between card-button">
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
      {/* End of Container */}
    </div>
    // End of Wrapper
  );
};

export default Projects;