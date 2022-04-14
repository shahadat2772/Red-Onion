import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo2 from "../../../images/logo2.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand className={`logoContainer`} href="#home">
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
              <Nav.Link style={{ fontWeight: "500" }} href="#deets">
                Login
              </Nav.Link>
              <Nav.Link
                style={{
                  fontWeight: "500",
                }}
                href="#memes"
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
