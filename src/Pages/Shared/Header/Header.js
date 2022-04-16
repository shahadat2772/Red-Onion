import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo2 from "../../../images/logo2.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  // Auth state hook
  const [user] = useAuthState(auth);

  // handleLogOut
  const handleLogOut = () => {
    signOut(auth);
  };

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
              <Nav.Link as={Link} to="/cart">
                <FontAwesomeIcon
                  className="mt-1"
                  icon={faShoppingCart}
                ></FontAwesomeIcon>
              </Nav.Link>
              <Nav.Link style={{ fontWeight: "500" }} as={Link} to="/home">
                Home
              </Nav.Link>
              {user ? (
                <button className="logOutBtn" onClick={handleLogOut}>
                  LogOut
                </button>
              ) : (
                <Nav.Link as={Link} to="/login" style={{ fontWeight: "500" }}>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
