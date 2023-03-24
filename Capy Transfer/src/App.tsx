import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import { AuthState } from "@/types/states.types";

import { useMemo } from "react";
import { useSelector } from "react-redux/es/exports";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme/theme";
import NavBar from "./components/navBar";

function App() {
  const mode = useSelector((state: AuthState) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Router />
          </ThemeProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
