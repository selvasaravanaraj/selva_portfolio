import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/Online-tutor.png";
import editor from "../../Assets/Projects/Voice-assistant.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import chatify from "../../Assets/Projects/ADNS1.png";
//import suicide from "../../Assets/Projects/suicide.png";
//import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Alcohol-detection"
              description="This project implements an IoT-driven alcohol detection system, integrating high-sensitivity ethanol sensors to measure alcohol concentration. The data is processed using Python for precise analysis, enabling real-time alerts or automated actions for safety-critical applications such as vehicular control systems and industrial hazard prevention."
              ghLink="https://github.com/selvasaravanaraj/Alcohol-Detection-using-IOT-with-python"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio"
              description="This portfolio project is designed to showcase the work and skills of [selva saravana raj]. The website features sections such as About Me, Projects, Skills, and Contact, and is built using technologies like React, Bootstrap, and JavaScript. The project highlights [specific technologies or skills, like web development, UI/UX design, etc.], with responsive design for both desktop and mobile views."
              ghLink="selva_portfolio"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Voice-assistant"
              description="A Python-based voice assistant capable of performing tasks, retrieving information, and interacting with users through natural language processing (NLP). It leverages speech recognition and synthesis libraries to understand voice commands and respond dynamically. This system integrates APIs for features like web searches, task automation, and smart device control, offering a customizable and interactive user experience."
              ghLink="https://github.com/selvasaravanaraj/Voice-Assisten"            
            />
          </Col>
            
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Online_Tutor"
              description="The Online Tutor website is a student-oriented platform developed using Vite.js, designed to provide easy access to educational resources and materials. It offers a smooth, fast, and interactive browsing experience, thanks to the use of Vite.js, which ensures quick page loads and responsive navigation. The site is intended for students to engage with learning content, view available resources, and access information in an organized, user-friendly manner."
              ghLink="https://github.com/selvasaravanaraj/online-tutor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
