import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate, useLocation } from "react-router-dom";

import pagesData from "../../pages/pagesData";

import CapyIcon from "../../assets/logo/CapyIcon";
import capy_white from "../../assets/logo/capy_white.svg";
import AdbIcon from "@mui/icons-material/Adb";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useScrollTrigger,
  IconButton,
} from "@mui/material";
import { Container } from "@mui/system";

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
}

const NavBar = (props: Props) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const location = useLocation();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Container maxWidth="xl">
            <Toolbar>
              <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                <CapyIcon color="dark" size="m" />
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/"
                  sx={{
                    ml: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "primary.main",
                    textDecoration: "none",
                  }}
                >
                  CAPY
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pagesData
                  .filter((e) => e.show == true)
                  .map((page, index) => {
                    return (
                      <Fragment key={index}>
                        <Typography
                          variant="h6"
                          noWrap
                          component={Link}
                          to={page.path}
                          sx={{
                            mr: 2,
                            display: { xs: "none", sm: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "primary.main",
                            textDecoration: "none",
                          }}
                        >
                          {page.title}
                        </Typography>
                      </Fragment>
                    );
                  })}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <ConnectButton />
                <IconButton
                  color="primary"
                  sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Box sx={{ pb: 5 }}></Box>
    </>
  );
};

export default NavBar;
{
  /* <Navbar
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
</Navbar> */
}
