import React from "react";
import {
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";

import FlexBetween from "@/components/utils/FlexBetween";
const fileZone = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/9750174/pexels-photo-9750174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="neutral">
            Share
          </Button>
          <Button size="small" variant="contained" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default fileZone;
