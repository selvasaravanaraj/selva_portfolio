import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <>
      <style>{`
        .home-about-section {
          background-color: #0a192f;
          color: #ccd6f6;
          min-height: 80vh;
          padding: 4rem 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .purple {
          color: #915eff;
          font-weight: 700;
        }

        .home-about-body {
          max-width: 700px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .myAvtar img {
          max-width: 250px;
          box-shadow: 0 10px 25px rgba(145, 94, 255, 0.3);
          border-radius: 50%;
        }

        .home-about-social-links {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0 0;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .home-about-social-links li {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .home-about-social-links li:hover {
          transform: scale(1.2);
        }

        .home-about-social a {
          color: #915eff;
          font-size: 30px;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .home-about-social a:hover {
          color: #5a31f4;
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          .home-about-body {
            max-width: 100%;
            font-size: 1rem;
          }

          .myAvtar img {
            max-width: 200px;
          }
        }
      `}</style>

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.8em", fontWeight: "700" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m currently working at{" "}
                <b className="purple">Leada Digital Dynamics</b> as a{" "}
                <b className="purple">Software Developer</b>, where I apply my passion for building
                scalable and efficient software solutions.
                <br />
                <br />
                I fell in love with programming and continuously strive to improve my skills.
                <br />
                <br />
                I'm fluent in classics like{" "}
                <i>
                  <b className="purple">C++, JavaScript, and Python</b>
                </i>
                , and enjoy working on cutting-edge{" "}
                <i>
                  <b className="purple">Web Technologies and Products</b>
                </i>{" "}
                as well as exploring{" "}
                <i>
                  <b className="purple">Blockchain</b>
                </i>
                .
                <br />
                <br />
                Whenever possible, I leverage my expertise with{" "}
                <b className="purple">Node.js</b> and modern JavaScript frameworks like{" "}
                <i>
                  <b className="purple">React.js and Next.js</b>
                </i>{" "}
                to build performant and user-friendly applications.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.2}>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-social mt-4 text-center">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect</span> with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/selvasaravanaraj"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/selva-saravana-raj-j/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_selva_007___"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://leetcode.com/u/selvam-07"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label="LeetCode"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.455 9.293a1.273 1.273 0 0 0-1.545.909l-.091.455a6.364 6.364 0 1 1-3.091-6.545 1.364 1.364 0 1 0 1.364-2.364 9.091 9.091 0 1 0 3.182 9.636l.182-.818a1.273 1.273 0 0 0-.91-1.273zM16 11.182a1.455 1.455 0 1 1-2.909 0 1.455 1.455 0 0 1 2.91 0z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home2;
