import { Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import {
  Menu,
  DarkMode,
  LightMode,
  Notifications,
  Message,
  Close,
  Help,
} from "@mui/icons-material";

import {
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  Divider,
  ListItemButton,
  ListItemText,
  List,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/state";
import pagesData from "../../routes/pagesData";
const NavDrawer = (props: any) => {
  const { open, setOpen } = props;
  const theme = useTheme();
  const location = useLocation();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "80%",
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" component="h1">
          Capy
        </Typography>
        <IconButton onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      {pagesData
        .filter((e) => e.show == true)
        .map((page, index) => {
          return (
            <Fragment key={index}>
              <List>
                <ListItemButton component={Link} to={page.path}>
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </List>
            </Fragment>
          );
        })}
    </Drawer>
  );
};

export default NavDrawer;

{
  /* <Typography
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
</Typography> */
}
