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
    <>
      <style>{`
        .footer {
          background-color: #0a192f;
          color: #ccd6f6;
          padding: 1.5rem 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          border-top: 1px solid #233554;
          user-select: none;
        }

        .footer-copywright h3 {
          margin: 0;
          font-weight: 500;
          font-size: 1rem;
          cursor: default;
          text-align: center;
        }

        .footer-copywright h3 a {
          color: #ccd6f6;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-copywright h3 a:hover {
          color: #00bfff;
        }

        .footer-body {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-icons {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 1rem;
        }

        .footer-icons li {
          display: inline-block;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-icons li a {
          color: #ccd6f6;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s ease;
        }

        .footer-icons li:hover {
          transform: scale(1.2);
        }

        .footer-icons li:hover a {
          color: #00bfff;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .footer-copywright {
            margin-bottom: 0.8rem;
          }

          .footer-body {
            gap: 1rem;
          }
        }
      `}</style>

      <Container fluid className="footer">
        <Row className="text-center text-md-start align-items-center">
          <Col md="4" className="footer-copywright">
            <h3>
              <a 
                href="mailto:selvasaravanarajj@gmail.com" 
                aria-label="Send email"
              >
                selvasaravanarajj@gmail.com
              </a>
            </h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>© {year} Selva Saravana Raj. All rights reserved.</h3>
          </Col>
          <Col md="4" className="footer-body">
            <IconContext.Provider value={{ color: "#ccd6f6", size: "1.8em" }}>
              <ul className="footer-icons">
                <li className="social-icons" aria-label="GitHub">
                  <a
                    href="https://github.com/selvasaravanaraj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons" aria-label="LinkedIn">
                  <a
                    href="https://www.linkedin.com/in/selva-saravana-raj-j/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons" aria-label="Instagram">
                  <a
                    href="https://www.instagram.com/_selva_007___"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons" aria-label="LeetCode">
                  <a
                    href="https://leetcode.com/u/selvam-07"
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
    </>
  );
}

export default Footer;
