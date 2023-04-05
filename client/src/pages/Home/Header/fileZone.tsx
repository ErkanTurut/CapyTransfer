import React from "react";
import { Paper, Box, Typography, Button, Grid } from "@mui/material";

import FlexBetween from "@/components/utils/FlexBetween";
const fileZone = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
};

export default fileZone;
