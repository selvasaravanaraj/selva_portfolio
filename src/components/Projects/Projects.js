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
              description="This project introduces an intelligent vehicle safety system designed to prevent drunk driving. The system uses an MQ-3 alcohol sensor to detect the driver's alcohol level. If the detected level is above a predefined threshold, it disables the vehicle and determines its real-time location via a GPS module. Utilizing Twilio API, the system sends the car’s location to law enforcement or emergency contacts for timely action. By integrating advanced sensor technology and real-time communication, this system aims to reduce drunk-driving incidents and enhance road safety through rapid response and tracking capabilities.
"
              ghLink="https://github.com/selvasaravanaraj/Alcohol-Detection-using-IOT-with-python"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio"
              description="My personal portfolio selva saravana raj which features some of my github projects as well as my resume and technical skills.

This project was built using these technologies.

React.js|
Node.js|
Express.js|
CSS3|
VsCode|
Vercel"
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
              description="The Online Tutor website is a student-oriented platform developed using Vite.js, designed to provide easy access to educational resources and materials. It offers a smooth, fast, and interactive browsing experience, the use of Vite.js, which ensures quick page loads and responsive navigation. The site is intended for students to engage with learning content, view available resources, and access information in an organized, user-friendly manner."
              ghLink="https://github.com/selvasaravanaraj/online-tutor"
            />
          </Col>
            
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
