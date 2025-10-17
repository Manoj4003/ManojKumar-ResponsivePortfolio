import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "./Projects.css";

import project1 from "../../assets/business-website.png";
import project2 from "../../assets/portfolio.png";
import project3 from "../../assets/mexant-website.png";
import project4 from "../../assets/restaurant-villa-website.png";
import project5 from "../../assets/startupamp-website.png";
import project6 from "../../assets/formValidation.png";

const Projects = () => {
  const projectList = [
    {
      title: "Smart Business Site",
      image: project1,
      description:
        "A modern, responsive form template with real-time input validation.Displays clear error and success messages for user-friendly interaction.",
      techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demo: "https://starupbussines.web.app/",
      code: "https://github.com/Manoj4003/Business_project_with_mobile_responsive_updated_project",
    },
    {
      title: "Personal Portfolio",
      image: project2,
      description:
        "A sleek personal portfolio showcasing skills, projects, and experience with an interactive design, fully responsive across all devices.",
      techUsed: ["React", "CSS", "JavaScript", "React"],
      demo: "https://portfolio-38d91.web.app/",
      code: "https://github.com/Manoj4003/ManojKumar-ResponsivePortfolio",
    },

    {
      title: "Mexant Business",
      image: project3,
      description:
        "A form validation template with real-time input checks.Includes clear error and success messages for a user-friendly experience.",
      techUsed: ["HTML", "CSS", "JavaScript", "React"],
      demo: "https://mexant-website-c76cd.web.app/",
      code: "https://github.com/Manoj4003/mexant-website-using-react-with-mobile-view",
    },
    {
      title: "Villa Agency",
      image: project4,
      description:
        "A responsive form validation template built with JavaScript.It performs real-time input checks and displays clear error or success messages.",
      techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demo: "https://villa-restaurant-website.netlify.app/",
      code: "https://github.com/Manoj4003/Restaurant-villa-with-mobile-responsive",
    },
    {
      title: "StartupAMP Business School",
      image: project5,
      description:
        "A professional website template for business schools with courses, team, and contact sections, optimized for mobile.",
      techUsed: ["HTML", "CSS", "JavaScript"],
      demo: "https://startupamp-business.netlify.app/",
      code: "https://github.com/Manoj4003/StartUp-website-with-mobile-responsive",
    },
    {
      title: "Form Validation",
      image: project6,
      description:
        "A JavaScript-based form validation project that checks user inputs in real-time and shows clear error or success messages.",
      techUsed: ["HTML", "CSS", "JavaScript"],
      demo: "https://animatedformvalidation.netlify.app/",
      code: "https://github.com/Manoj4003/form-validation-using-javaScript",
    },
  ];

  return (
    // 🎯 WRAPPER: This outer div will take the full width and the background color
    <div className="projects-section-wrapper mt-3" id="projects">
      {/* Container class moves from here */}
      <Container className="my-5 projects">
        <h2 className="text-center mb-5">
          My <span className="span-color">Projects</span>
        </h2>
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
      {/* End of Container */}
    </div>
    // End of Wrapper
  );
};

export default Projects;
