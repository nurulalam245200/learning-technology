import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from "../../../images/logo.png";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import "../../../App.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("light");
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const handleTheme = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Image src={logo}></Image>
        <Navbar.Brand className="text-primary fs-3 fw-semibold" href="#home">
          Learning Technology
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-4">
            <NavLink className="text-decoration-none me-3" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none me-3" to="/courses">
              Courses
            </NavLink>
            <NavLink className="text-decoration-none me-3" to="/fqa">
              FAQ
            </NavLink>
            <NavLink className="text-decoration-none me-3" to="/blog">
              Blog
            </NavLink>
          </Nav>
          <Nav className="me-3">
            {mode === "light" ? (
              <button className="border border-light" onClick={handleTheme}>
                <FaMoon></FaMoon> Toggle Dark
              </button>
            ) : (
              <button className="border border-light" onClick={handleTheme}>
                <FaSun></FaSun> Toggle light
              </button>
            )}
          </Nav>
          <Nav>
            {user?.uid ? (
              <>
                <Button variant="primary" onClick={handleLogOut}>
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link
                  className="text-decoration-none bg-primary text-white p-2 rounded me-3"
                  to="/login"
                >
                  Log In
                </Link>
                <Link
                  className="text-decoration-none bg-primary text-white p-2 rounded"
                  to="/register"
                >
                  Sign Up
                </Link>
              </>
            )}

            <Link to="/profile">
              {user?.photoURL ? (
                <Image
                  className="ms-2"
                  title={user?.displayName}
                  roundedCircle
                  style={{ height: "30px" }}
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
