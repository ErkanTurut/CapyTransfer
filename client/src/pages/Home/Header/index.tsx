import Hero from "./hero";
import FileZone from "./fileZone";
import { Paper, Box, Grid, Container } from "@mui/material";
import FlexBetween from "@/components/utils/FlexBetween";
const Header = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "start",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Hero />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FileZone />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
