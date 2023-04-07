import React, { useState, Fragment } from "react";

import { useNavigate, useLocation, Link } from "react-router-dom";
import FlexBetween from "../utils/FlexBetween";
import pagesData from "../../routes/pagesData";
import { WalletConnectButton } from "../wallet/connectButton";
import NavDrawer from "./navDrawer";
import CapyIcon from "../../assets/logo/CapyIcon";

import {
  Menu,
  DarkMode,
  LightMode,
  Notifications,
  Message,
  Close,
  Help,
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
  Button,
} from "@mui/material";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <AppBar
        component="nav"
        color="transparent"
        position="fixed"
        sx={{ width: "100%" }}
      >
        <FlexBetween padding="0.5rem">
          {/* logo */}
          <FlexBetween gap="3rem">
            <Box
              component={Link}
              to="/"
              gap="0.5rem"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <CapyIcon
                color={theme.palette.mode === "dark" ? "light" : "dark"}
                size="m"
              />
              <Typography
                fontWeight="bold"
                color="default"
                fontSize="clamp(1rem, 2rem, 2.25rem)"
                sx={{
                  "&:hover": {
                    color: theme.palette.neutral.main,
                    cursor: "pointer",
                  },
                }}
              >
                CAPY
              </Typography>
            </Box>
            {isNonMobileScreens && (
              <FlexBetween gap="1.5rem">
                {pagesData
                  .filter((e) => e.show == true)
                  .map((page, index) => {
                    return (
                      <Fragment key={index}>
                        <Typography
                          fontWeight={
                            location.pathname === page.path ? "bold" : "regular"
                          }
                          color={
                            location.pathname === page.path
                              ? theme.palette.neutral.dark
                              : ""
                          }
                          component={Link}
                          fontSize="clamp(0.5rem, 1rem, 1.25rem)"
                          to={page.path}
                          sx={{
                            "&:hover": {
                              color: theme.palette.neutral.main,
                              cursor: "pointer",
                            },
                          }}
                        >
                          {page.title}
                        </Typography>
                      </Fragment>
                    );
                  })}
              </FlexBetween>
            )}
          </FlexBetween>

          {/* DESKTOP NAV */}
          {isNonMobileScreens ? (
            <>
              <FlexBetween gap="0.2rem">
                <WalletConnectButton />

                <IconButton
                  onClick={() => dispatch(setMode())}
                  sx={{ borderRadius: "8px" }}
                >
                  {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
                </IconButton>
              </FlexBetween>
            </>
          ) : (
            <>
              <IconButton
                onClick={() => setOpen(!open)}
                sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
              >
                <Menu />
              </IconButton>
              <NavDrawer open={open} setOpen={setOpen} />
            </>
          )}
        </FlexBetween>
      </AppBar>
      <Box sx={{ pb: "6rem" }} />
    </>
  );
};

export default NavBar;
