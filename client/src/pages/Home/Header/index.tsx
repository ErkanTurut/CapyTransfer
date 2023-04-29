import Hero from "./hero";
import FileZone from "./fileZone";
import {
  Paper,
  Box,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlexBetween from "@/components/utils/FlexBetween";
import { Pix } from "@mui/icons-material";

import "./header.css";

const Header = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row" }}
      sx={{ justifyContent: "center", alignItems: "center", gap: "0.5rem" }}
    >
      <Grid
        item
        xs={5}
        sm={9}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "left",
          flexDirection: "column",
          gap: "0.5rem",
          order: { xs: 1, md: 0 },
        }}
      >
        <Hero />
      </Grid>
      <Grid
        item
        xs={4}
        sm={9}
        md={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <FileZone />
      </Grid>
    </Grid>
  );
};

export default Header;
