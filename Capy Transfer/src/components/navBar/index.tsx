import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate, useLocation } from "react-router-dom";
import FlexBetween from "../utils/FlexBetween";
import pagesData from "../../pages/pagesData";

import CapyIcon from "../../assets/logo/CapyIcon";
//import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import {
  Menu,
  DarkMode,
  LightMode,
  Notifications,
  Message,
  Close,
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/state";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useScrollTrigger,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));

  return <div>ok</div>;
};

export default NavBar;

/*
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

*/
