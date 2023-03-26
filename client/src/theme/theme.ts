import { ThemeMode } from "@/types/states.types";
import "@fontsource/karla";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

export const themeSettings = (mode: ThemeMode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              paper: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ["poppins, karla"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["poppins"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["poppins"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["poppins"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["poppins"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["poppins"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["poppins"].join(","),
        fontSize: 14,
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
          },
        },
      },
    },
  };
};

import { RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
const myCustomTheme: Theme = {
  blurs: {
    modalOverlay: "...",
  },
  colors: {
    accentColor: "...",
    accentColorForeground: "...",
    actionButtonBorder: "...",
    actionButtonBorderMobile: "...",
    actionButtonSecondaryBackground: "...",
    closeButton: "...",
    closeButtonBackground: "...",
    connectButtonBackground: "...",
    connectButtonBackgroundError: "...",
    connectButtonInnerBackground: "...",
    connectButtonText: "...",
    connectButtonTextError: "...",
    connectionIndicator: "...",
    downloadBottomCardBackground: "...",
    downloadTopCardBackground: "...",
    error: "...",
    generalBorder: "...",
    generalBorderDim: "...",
    menuItemBackground: "...",
    modalBackdrop: "...",
    modalBackground: "...",
    modalBorder: "...",
    modalText: "...",
    modalTextDim: "...",
    modalTextSecondary: "...",
    profileAction: "...",
    profileActionHover: "...",
    profileForeground: "...",
    selectedOptionBorder: "...",
    standby: "...",
  },
  fonts: {
    body: "...",
  },
  radii: {
    actionButton: "...",
    connectButton: "...",
    menuButton: "...",
    modal: "...",
    modalMobile: "...",
  },
  shadows: {
    connectButton: "...",
    dialog: "...",
    profileDetailsAction: "...",
    selectedOption: "...",
    selectedWallet: "...",
    walletLogo: "...",
  },
};

// accentColor,
// accentColorForeground,
// actionButtonBorder: "rgba(0, 0, 0, 0.04)",
// actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
// actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
// closeButton: "rgba(60, 66, 66, 0.8)",
// closeButtonBackground: "rgba(0, 0, 0, 0.06)",
// connectButtonBackground: "#FFF",
// connectButtonBackgroundError: "#FF494A",
// connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
// connectButtonText: "#25292E",
// connectButtonTextError: "#FFF",
// connectionIndicator: "#30E000",
// downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
// downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
// error: "#FF494A",
// generalBorder: "rgba(0, 0, 0, 0.06)",
// generalBorderDim: "rgba(0, 0, 0, 0.03)",
// menuItemBackground: "rgba(60, 66, 66, 0.1)",
// modalBackdrop: "rgba(0, 0, 0, 0.3)",
// modalBackground: "#FFF",
// modalBorder: "transparent",
// modalText: "#25292E",
// modalTextDim: "rgba(60, 66, 66, 0.3)",
// modalTextSecondary: "rgba(60, 66, 66, 0.6)",
// profileAction: "#FFF",
// profileActionHover: "rgba(255, 255, 255, 0.5)",
// profileForeground: "rgba(60, 66, 66, 0.06)",
// selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
// standby: "#FFD641"
