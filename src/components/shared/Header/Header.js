import { signOut } from "@firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomActiveLink from "../../CustomActiveLink/CustomActiveLink";
import { Outlet } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="header bg-success bg-opacity-25"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="" href="#home">
            <img src={"https://i.ibb.co/d4LT5cT/fruits-1.png"} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomActiveLink} to="/" className=" h6 ms-5">
                Home
              </Nav.Link>
              <Nav.Link className=" h6" as={CustomActiveLink} to="/manage">
                ManageInventories
              </Nav.Link>
              <Nav.Link className="h6" as={CustomActiveLink} to="/manageitem">
                ManageItem
              </Nav.Link>
              <Nav.Link className="h6" as={CustomActiveLink} to="/myItem">
                MyItem
              </Nav.Link>
              <Nav.Link
                className="h6"
                eventKey={2}
                as={CustomActiveLink}
                to="/blogs"
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                className="h6"
                eventKey={2}
                as={CustomActiveLink}
                to="/about"
              >
                AboutUs
              </Nav.Link>
              <Nav.Link className="h6" as={CustomActiveLink} to="contact">
                ContactUs
              </Nav.Link>
            </Nav>
              <Nav>
                {user ? (
                  <button
                    className="bg-warning text-success fw-bold border-0 border rounded-pill px-3 py-2"
                    onClick={logout}
                  >
                    Log out
                  </button>
                ) : (
                  <Nav.Link
                    className="bg-warning text-success fw-bold border-0 border rounded-pill px-3 py-2"
                    eventKey={2}
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                )}
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
