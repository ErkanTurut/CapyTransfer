import { createTheme } from "@mui/material/styles";
import { light } from "@mui/material/styles/createPalette";

const theme = createTheme({
  //make background dark

  palette: {
    primary: {
      main: "#3763F4",
    },
    secondary: {
      main: "#6f42c1",
    },
    success: {
      main: "#19F5AA",
    },
    warning: {
      main: "#fd7e14",
    },
    error: {
      main: "#dc3545",
    },
    info: {
      main: "#06a0b2",
    },
  },

  typography: {
    fontFamily: ["inter", "sans-serif"].join(","),
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },
    },
    //make background blur
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default theme;
