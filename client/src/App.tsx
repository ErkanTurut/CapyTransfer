import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { RootState } from "@/state";

import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme/theme";
import NavBar from "./components/navBar";

function App() {
  const state = useSelector((state: RootState) => state);
  console.log(state);
  const theme = useMemo(
    () =>
      createTheme(themeSettings(state.theme.isDarkTheme ? "dark" : "light")),
    [state]
  );

  return (
    <div className="App">
      <>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Container maxWidth="xl">
              <Router />
            </Container>
          </ThemeProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
