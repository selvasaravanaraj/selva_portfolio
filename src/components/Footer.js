import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // React Icons for LeetCode
import { IconContext } from "react-icons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Selva Saravana Raj</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Selva</h3>
        </Col>
        <Col md="4" className="footer-body">
          <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/selvasaravanaraj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/selva-saravana-raj-j/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_selva_007___"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/selvaleetcode007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
