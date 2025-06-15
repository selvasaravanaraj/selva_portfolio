import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

// Project Images
import emotion from "../../Assets/Projects/Online-tutor.png";
import editor from "../../Assets/Projects/Voice-assistant.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import chatify from "../../Assets/Projects/ADNS1.png";
import MTBS from "../../Assets/Projects/MTBS-1.png";
import loan from "../../Assets/Projects/loan-calc.png"; // example fix


function ProjectCard({ imgPath, title, ghLink, demoLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} className="project-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="project-links">
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <>
      <style>{`
        .project-section {
          background-color: #0d1117;
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .project-heading {
          font-size: 2.5rem;
          color: #ccd6f6;
          font-weight: bold;
          text-align: center;
          margin-bottom: 10px;
        }

        .project-card {
          margin-bottom: 30px;
        }

        .project-card-view {
          background-color: #1e1e2f;
          border: 1px solid #2c2c3c;
          border-radius: 12px;
          color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .project-card-view:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }

        .project-img {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          height: 200px;
          object-fit: cover;
        }

        .project-links {
          margin-top: 12px;
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .project-link {
          color: #00bfff;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #66fcf1;
        }

        @media (max-width: 768px) {
          .project-img {
            height: 180px;
          }

          .project-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Here are a few projects I've worked on recently. Click to view the code or demo.
          </p>

          <Row style={{ justifyContent: "center" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                title="Online Tutor"
                ghLink="https://github.com/selvasaravanaraj/online-tutor"
                demoLink="https://online-tutor-selva.netlify.app"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={loan}
                title="Loan Calculator"
                ghLink="https://github.com/selvasaravanaraj/LOAN-CALCULATOR"
                demoLink="https://loan-calculator-ruby.vercel.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                title="Portfolio"
                ghLink="https://github.com/selvasaravanaraj/selva_portfolio"
                demoLink="https://selva-portfolio.vercel.app"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={MTBS}
                title="Wallet Ticket Booking"
                ghLink="https://github.com/selvasaravanaraj/MULTIPLEX"
                demoLink=""
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                title="Alcohol Detection System"
                ghLink="https://github.com/selvasaravanaraj/Automobile-safety-enhancement-through-alcohol-detection-and-notification-systems"
                demoLink=""
              />
            </Col>

           

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                title="Voice Assistant"
                ghLink="https://github.com/selvasaravanaraj/Voice-Assisten"
                demoLink=""
              />
            </Col>

            

           
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
