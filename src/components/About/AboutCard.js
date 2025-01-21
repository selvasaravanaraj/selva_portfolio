import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">selva saravana raj </span>
            from <span className="purple"> tamil nadu, India.</span>
            <br />
            I've complete a fullstack internship at 8queens software technology chennai .
            <br />
            I recently completed my final year of B.Tech in Computer Science and Business Systems at Francis Xavier Engineering College.
            <br />
            <br />
            Apart from Acdamics, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">selva saravana raj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
