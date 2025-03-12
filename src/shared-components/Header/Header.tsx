import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav>
      <Navbar key="md" expand="md" className="bg-green-700 text-white">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md"
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
            show={show}
            onHide={handleClose}
            className="bg-green-700"
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3 d-md-flex d-block"
                style={{ gap: show ? "0px" : "3rem" }}
              >
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={handleClose}
                  className={location.pathname === "/" ? "active-link" : ""}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/doctors"
                  onClick={handleClose}
                  className={
                    location.pathname === "/doctors" ? "active-link" : ""
                  }
                >
                  Doctor's
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/products"
                  onClick={handleClose}
                  className={
                    location.pathname === "/products" ? "active-link" : ""
                  }
                >
                  Product
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={handleClose}
                  className={
                    location.pathname === "/contact" ? "active-link" : ""
                  }
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
