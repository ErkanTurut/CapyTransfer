import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import pagesData from "../../pages/pagesData";
import { useNavigate, useLocation } from "react-router-dom";
import capy_dark from "../../assets/logo/capy_dark.svg";
import capy_white from "../../assets/logo/capy_white.svg";

import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { ThemeContext, themes } from "../../contexts/theme/context";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const location = useLocation();

  return (
    <Navbar
      className={`navbar ${
        darkMode ? "navbar-dark" : ""
      } navbar-expand-md fixed-top py-3`}
      expand="md"
      id="mainNav"
      style={{
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
      }}
    >
      <Container className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <span className="bs-icon-rounded bs-icon-none shadow-none d-flex justify-content-center align-items-center me-2 bs-icon">
            <img
              src={darkMode ? capy_white : capy_dark}
              alt="triangle with all three sides equal"
              height="40"
            />
          </span>
          <span className="d-none d-sm-inline">Capy</span>
        </a>
        <div className="d-flex gap-2">
          <span className="d-inline d-md-none">
            <ConnectButton />
          </span>
          <Navbar.Toggle
            as="button"
            onClick={() => setIsOpen(!isOpen)}
            className="border-0 shadow-none px-1"
            aria-controls="navcol-1"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </Navbar.Toggle>
        </div>

        <Navbar.Collapse className="collapse navbar-collapse" id="navcol-1">
          <Nav className="navbar-nav mx-auto">
            {pagesData
              .filter((e) => e.show == true)
              .map((page) => {
                return (
                  <Nav.Link
                    as={Link}
                    to={page.path}
                    active={location.pathname === page.path}
                  >
                    {page.title}
                  </Nav.Link>
                );
              })}
          </Nav>
          <div className="d-flex gap-2">
            <span className="d-none d-md-inline">
              <ConnectButton />
            </span>

            <ThemeContext.Consumer>
              {({ changeTheme }) => (
                <Button
                  variant={darkMode ? "dark" : "light"}
                  className="px-3 py-2 border-0"
                  style={{ borderRadius: "8px" }}
                  onClick={() => {
                    setDarkMode(!darkMode);
                    changeTheme(darkMode ? themes.light : themes.dark);
                  }}
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-brightness-high-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-moon-stars-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                      <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                    </svg>
                  )}
                </Button>
              )}
            </ThemeContext.Consumer>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
