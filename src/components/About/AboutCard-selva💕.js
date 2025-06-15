import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <>
      <style>{`
        .quote-card-view {
          background: #0d1117;
          color: #c9d1d9;
          border: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          border-radius: 15px;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .quote-card-view:hover {
          transform: translateY(-5px);
        }

        .quote-card-view .purple {
          color: #c084f5;
          font-weight: 600;
        }

        .quote-card-view blockquote {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .about-activity {
          margin-left: 1.2rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .quote-card-view {
            padding: 1.5rem;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hello! I'm <span className="purple">Selva Saravana Raj</span> from{" "}
              <span className="purple">Tirunelveli, Tamil Nadu</span>.
              <br />
              <br />
              I recently completed my B.Tech in{" "}
              <span className="purple">Computer Science and Business Systems</span> (Class of 2025) from{" "}
              <span className="purple">Francis Xavier Engineering College</span>.
              <br />
              <br />
              During my academic journey, I gained practical experience through a{" "}
              <span className="purple">full-stack development internship</span> at{" "}
              <span className="purple">8Queens Software Technologies, Chennai</span>.
              <br />
              <br />
              Currently, I’m working at{" "}
              <span className="purple">Leada Digital Dynamics</span>, where I actively apply and grow my technical skills in real-time projects.
            </p>

            <p style={{ marginTop: "1.2rem" }}>
              <strong>Beyond coding, I also enjoy:</strong>
            </p>

            <ul>
              <li className="about-activity">
                <ImPointRight /> Playing Chess
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Drawing
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)", marginTop: "1.5rem" }}>
              "Strive to build things that make a difference!"
            </p>
            <footer className="blockquote-footer">Selva Saravana Raj</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

export default AboutCard;
