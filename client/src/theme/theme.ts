import { ThemeMode } from "@/types/states.types";
import { colorsPalette } from "./palette";
import "@fontsource/karla";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
// color design tokens export

export const themeSettings = (mode: ThemeMode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorsPalette.primary[300],
              main: colorsPalette.primary[400],
              light: colorsPalette.primary[800],
            },
            secondary: {
              dark: colorsPalette.secondary[400],
              main: colorsPalette.secondary[500],
              light: colorsPalette.secondary[800],
            },
            neutral: {
              dark: colorsPalette.grey[100],
              main: colorsPalette.grey[200],
              mediumMain: colorsPalette.grey[300],
              medium: colorsPalette.grey[400],
              light: colorsPalette.grey[700],
            },
            grey: {
              50: colorsPalette.grey[50],
              100: colorsPalette.grey[100],
              200: colorsPalette.grey[200],
              300: colorsPalette.grey[300],
              400: colorsPalette.grey[400],
              500: colorsPalette.grey[500],
              600: colorsPalette.grey[600],
              700: colorsPalette.grey[700],
              800: colorsPalette.grey[800],
              900: colorsPalette.grey[900],
            },
            background: {
              default: colorsPalette.grey[900],
              paper: colorsPalette.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorsPalette.primary[700],
              main: colorsPalette.primary[400],
              light: colorsPalette.primary[50],
            },
            secondary: {
              dark: colorsPalette.secondary[700],
              main: colorsPalette.secondary[500],
              light: colorsPalette.secondary[50],
            },
            text: {
              primary: colorsPalette.grey[900],
              secondary: colorsPalette.grey[600],
            },
            action: {
              active: colorsPalette.grey[600],
            },
            neutral: {
              dark: colorsPalette.grey[700],
              main: colorsPalette.grey[500],
              mediumMain: colorsPalette.grey[400],
              medium: colorsPalette.grey[400],
              light: colorsPalette.grey[50],
            },
            background: {
              default: colorsPalette.grey[0],
              alt: colorsPalette.grey[25],
            },
          }),
    },
    // shape
    shape: {
      borderRadius: 8,
    },
    // typography
    typography: {
      fontFamily: ["poppins, karla"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["poppins"].join(","),
        fontSize: 40,
        fontWeight: "bold",
      },
      h2: {
        fontFamily: ["poppins"].join(","),
        fontSize: 32,
        fontWeight: "bold",
      },
      h3: {
        fontFamily: ["poppins"].join(","),
        fontSize: 24,
        fontWeight: "bold",
      },
      h4: {
        fontFamily: ["poppins"].join(","),
        fontSize: 20,
        fontWeight: "bold",
      },
      h5: {
        fontFamily: ["poppins"].join(","),
        fontSize: 16,
        fontWeight: "bold",
      },
      h6: {
        fontFamily: ["poppins"].join(","),
        fontSize: 14,
        fontWeight: "bold",
      },
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
            boxShadow: "none",
            backgroundImage: "none",
          },
        },
      },
    },
  };
};
