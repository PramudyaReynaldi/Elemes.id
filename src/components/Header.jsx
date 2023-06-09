import React, { useEffect, useState } from "react";
import imgNavbar from "../assets/images/image_55.png";
import Button from "./Buttons/ButtonDaftarSekarang";
import { Navbar, Container, Nav } from "react-bootstrap";
import imgMenu from "../assets/images/menu.png";

export default function Header() {
  const [navMobile, setNavMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setNavMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {navMobile ? (
        <>
          <Container>
            <div className="header__title d-flex justify-content-between pt-3">
              <img src={imgNavbar} />
              <Button />
            </div>
            <div className="bg-light fixed-bottom p-3 d-flex justify-content-evenly">
              <div className="nav__menu">
                <a href="#" className="nav-link">
                  <img src={imgMenu} />
                  <p>Home</p>
                </a>
              </div>
              <div className="nav__menu">
                <a href="#" className="nav-link">
                  <img src={imgMenu} />
                  <p>Promotions</p>
                </a>
              </div>
              <div className="nav__menu">
                <a href="#" className="nav-link">
                  <img src={imgMenu} />
                  <p>Others</p>
                </a>
              </div>
            </div>
          </Container>
        </>
      ) : (
        <>
          <Navbar>
            <Navbar.Brand href="#home">
              <img src={imgNavbar} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link className="nav__text" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav__text" href="#link">
                  About
                </Nav.Link>
                <Nav.Link className="nav__text" href="#link">
                  Promotions
                </Nav.Link>
                <Nav.Link className="nav__text" href="#link">
                  Contact Us
                </Nav.Link>
              </Nav>
              <p className="mt-3 me-4">Masuk</p>
              <Button />
            </Navbar.Collapse>
          </Navbar>
        </>
      )}
    </Container>
  );
}
