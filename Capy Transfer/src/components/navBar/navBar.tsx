import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import pagesData from "../../pages/pagesData";
import capy_dark from "../../assets/logo/capy_dark.svg";
import capy_white from "../../assets/logo/capy_white.svg";

import { ThemeContext, themes } from "../../contexts/theme/context";

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
                  fillRule="evenodd"
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
              .map((page, index) => {
                if (
                  page.children &&
                  page.children.filter((e) => e.show == true).length > 0
                ) {
                  return (
                    <NavDropdown
                      key={index}
                      id="dropdown-basic-button"
                      title={page.title}
                      className="nav-item dropdown"
                    >
                      {page.children
                        .filter((e) => e.show == true)
                        .map((child, index) => {
                          return (
                            <NavDropdown.Item
                              as={Link}
                              key={index}
                              to={child.path}
                              active={location.pathname === child.path}
                            >
                              {child.title}
                            </NavDropdown.Item>
                          );
                        })}
                    </NavDropdown>
                  );
                } else {
                  return (
                    <Nav.Link
                      as={Link}
                      key={index}
                      to={page.path}
                      active={location.pathname === page.path}
                    >
                      {page.title}
                    </Nav.Link>
                  );
                }
              })}
          </Nav>
          <div className="d-flex gap-2">
            <ConnectButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
