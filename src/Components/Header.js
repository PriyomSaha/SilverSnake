import React, { useState, useEffect } from "react";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let expand = "md";

  let [nav, setNav] = useState("/");

  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let setActiveNav = () => {
    setNav(location.pathname);
  };
  useEffect(() => {
    setActiveNav();
  }, [setActiveNav]);

  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className="shadow w-100 flex-nowrap fixed-top header"
        // bg="dark"
        variant="dark"
      >
        <Container fluid className="text-uppercase">
          <Link to="/">
            <Navbar.Brand>SilverSnake</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            data-bs-theme="dark"
            backdrop="static"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Navigations
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={nav === "/" ? "nav-link active" : "nav-link"}
                    onClick={setActiveNav}
                  >
                    Home
                  </Link>
                </li>

                <div className="vr d-none d-md-block" />
                <li className="nav-item">
                  <Link
                    to="services"
                    className={
                      nav === "/services" ? "nav-link active" : "nav-link"
                    }
                    onClick={setActiveNav}
                  >
                    Our Services
                  </Link>
                </li>
                <div className="vr d-none d-md-block" />
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={
                      nav === "/about" ? "nav-link active" : "nav-link"
                    }
                    onClick={setActiveNav}
                  >
                    About Us
                  </Link>
                </li>
                <div className="vr d-none d-md-block" />
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={
                      nav === "/contact" ? "nav-link active" : "nav-link"
                    }
                    onClick={setActiveNav}
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
