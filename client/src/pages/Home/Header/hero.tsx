import React from "react";
import { Paper, Box, Typography, Button, Grid } from "@mui/material";

const hero = () => {
  return (
    <>
      <Typography
        className="linear-wipe prevent-select"
        variant="h2"
        component="h1"
      >
        Stronger, Smarter, Better !
      </Typography>
      <Typography variant="body1">
        Capy is a file transfer system using the IPFS protocol. This allows
        efficient distribution of large volumes of immutable, fast and optimized
        data.
      </Typography>
      <Button variant="contained">Get Started</Button>
    </>
  );
};

export default hero;
