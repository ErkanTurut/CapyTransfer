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
} from "@mui/material";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <FlexBetween
      padding="0.5rem"
      backgroundColor={theme.palette.background.paper}
    >
      {/* logo */}
      <FlexBetween gap="0.5rem">
        <CapyIcon
          color={theme.palette.mode === "dark" ? "light" : "dark"}
          size="m"
        />
        {isNonMobileScreens && (
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem, 2rem, 2.25rem)"
            onClick={() => navigate("/")}
            sx={{
              "&:hover": {
                color: theme.palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            CAPY
          </Typography>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        // <FlexBetween gap="1.75rem">
        //   {pagesData
        //     .filter((e) => e.show == true)
        //     .map((page, index) => {
        //       return (
        //         <Fragment key={index}>
        //           <Typography
        //             fontWeight="bold"
        //             fontSize="clamp(1rem, 2rem, 2.25rem)"
        //             color="primary"
        //             onClick={() => navigate(page.path)}
        //             sx={{
        //               "&:hover": {
        //                 color: theme.palette.primary.light,
        //                 cursor: "pointer",
        //               },
        //             }}
        //           >
        //             {page.title}
        //           </Typography>
        //         </Fragment>
        //       );
        //     })}
        // </FlexBetween>
        <FlexBetween gap="1rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <LightMode sx={{ fontSize: "25px" }} />
            ) : (
              <DarkMode
                sx={{ color: theme.palette.common.black, fontSize: "25px" }}
              />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <ConnectButton
            chainStatus="none"
            accountStatus="avatar"
            showBalance={false}
          />
        </FlexBetween>
      ) : (
        <IconButton
          color="primary"
          onClick={() => setIsMenuOpen(true)}
          sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
        >
          <Menu />
        </IconButton>
      )}
    </FlexBetween>
  );
};

export default NavBar;
