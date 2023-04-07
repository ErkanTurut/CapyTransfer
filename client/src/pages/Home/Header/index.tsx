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
const Header = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        sx={{ justifyContent: "center", alignItems: "center", gap: "2rem" }}
      >
        <Grid
          item
          sm={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
            flexDirection: "column",
            gap: "0.5rem",
            px: "1rem",

            order: { xs: 1, md: 0 },
          }}
        >
          <Hero />
        </Grid>
        <Grid item sm={6} md={5} sx={{ display: "flex" }}>
          <FileZone />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
