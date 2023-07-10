import React, { useState } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  let expand = "md";

  let [nav, setNav] = useState("home");
  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="shadow w-100 flex-nowrap sticky-top"
        bg="dark"
        variant="dark"
      >
        <Container fluid className="text-uppercase">
          <Navbar.Brand>SilverSnake</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            data-bs-theme="dark"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Navigations
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link
                    to="/"
                    className={nav === "home" ? "nav-link active" : "nav-link"}
                    onClick={() => setNav("home")}
                  >
                    {/* className="nav-link" */}
                    Home
                  </Link>
                </li>
                <div class="vr d-none d-md-block" />
                <li class="nav-item">
                  <Link
                    to="/about"
                    className={nav === "about" ? "nav-link active" : "nav-link"}
                    onClick={() => setNav("about")}
                  >
                    About Us
                  </Link>
                </li>
                <div class="vr d-none d-md-block" />
                <li class="nav-item">
                  <Link
                    to="/services"
                    className={
                      nav === "services" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setNav("services")}
                  >
                    Our Services
                  </Link>
                </li>
                <div class="vr d-none d-md-block" />
                <li class="nav-item">
                  <Link
                    to="/contact"
                    className={
                      nav === "contact" ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setNav("contact")}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
