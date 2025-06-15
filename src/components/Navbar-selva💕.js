import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <style>{`
        /* Cursor pointer for all navbar interactive elements */
        .navbar,
        .navbar * {
          cursor: default;
        }
        .navbar .nav-link,
        .navbar-brand,
        .navbar-toggler {
          cursor: pointer;
          transition: color 0.3s ease, transform 0.3s ease;
          user-select: none;
        }

        .navbar .nav-link:hover,
        .navbar .nav-link:focus {
          color: #4f46e5 !important; /* Indigo-600 */
          transform: scale(1.05);
        }

        /* Sticky navbar with frosted glass and shadow on scroll */
        .sticky {
          background-color: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          transition: background-color 0.35s ease, box-shadow 0.35s ease;
          border-radius: 1rem;
          margin: 0.5rem 1rem;
        }

        /* Default navbar transparent and minimal */
        .navbar {
          background-color: transparent !important;
          transition: background-color 0.35s ease;
          border-radius: 1rem;
          margin: 0.5rem 1rem;
        }

        /* Navbar brand style */
        .navbar-brand {
          font-weight: 700;
          font-size: 1.25rem;
          color: #a78bfa; /* Indigo-300 */
          user-select: none;
        }
        .navbar-brand:hover {
          color: #7c3aed; /* Indigo-700 */
        }

        /* Hamburger toggle styling */
        .navbar-toggler {
          border: none;
          padding: 0;
        }
        .navbar-toggler span {
          display: block;
          width: 24px;
          height: 3px;
          margin: 5px 0;
          background-color: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        /* Change hamburger color on scroll */
        .sticky .navbar-toggler span {
          background-color: #a78bfa;
        }

        /* Nav links font & spacing */
        .nav-link {
          font-weight: 600;
          font-size: 1rem;
          color: white !important;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Icon bottom margin */
        .nav-link svg {
          margin-bottom: 2px;
          color: #a78bfa; /* Indigo-300 */
          transition: color 0.3s ease;
        }
        .nav-link:hover svg {
          color: #7c3aed; /* Indigo-700 */
        }
      `}</style>

      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            ƧΣᄂVΛ'Ƨ
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument /> Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
