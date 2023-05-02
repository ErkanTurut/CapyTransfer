import Hero from "./hero";
import Filezone from "./fileZone";
import {
  Paper,
  Box,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlexBetween from "@/components/utils/FlexBetween";

import "./header.css";

const Header = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      container
      direction={{ xs: "column", sm: "row" }}
      sx={{ justifyContent: "center", alignItems: "center", gap: 4 }}
    >
      <Grid
        item
        xs={9}
        sm={9}
        md={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "left",
          flexDirection: "column",
          gap: 2,
          order: { xs: 1, md: 0 },
        }}
      >
        <Hero />
      </Grid>
      <Grid
        item
        xs={9}
        sm={9}
        md={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Filezone />
      </Grid>
    </Grid>
  );
};

export default Header;
