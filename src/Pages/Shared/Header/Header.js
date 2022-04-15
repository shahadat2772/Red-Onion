import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo2 from "../../../images/logo2.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand className={`logoContainer`} as={Link} to="/">
            <img className="img-fluid" src={logo2} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#deets">
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faShoppingCart}
                ></FontAwesomeIcon>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" style={{ fontWeight: "500" }}>
                Login
              </Nav.Link>
              <Nav.Link
                style={{
                  fontWeight: "500",
                }}
                as={Link}
                to="/signup"
              >
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
