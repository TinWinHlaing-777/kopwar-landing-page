import React, { useState, useEffect } from "react";
import { Navbar, Container, Image, Nav } from "react-bootstrap";
import "./Nav.css";

const Navcomponent = () => {
  const [isnavcolor, setNavColor] = useState("");

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setNavColor("nav-bar");
    } else {
      setNavColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <Navbar className={isnavcolor} fixed="top" expand="lg">
        <Container className="nav__container">
          <Navbar.Brand href="#home">
            <Image src="/images/kopwar.jpeg" alt="logo" className="nav__logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navcomponent;
