import { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stepper,
  Step,
  StepLabel,
  styled,
} from "@mui/material";

import Dropzone from "@/components/fileZone";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "@/state";
import FlexBetween from "@/components/utils/FlexBetween";
import { next } from "@/state/fileZone/fileZoneReducer";

const fileZone = () => {
  const state = useSelector((state: RootState) => state);
  const fileZoneComponents = [
    {
      key: 1,
      component: <Dropzone />,
      label: "Upload",
    },
    {
      key: 2,
      component: <Dropzone />,
      label: "Settings",
    },
    {
      key: 3,
      component: <Dropzone />,
      label: "Send",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 500,
          boxShadow: 0,
          border: 2,
          borderColor: "neutral.light",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ height: 300 }}>
          <Dropzone />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button size="small" variant="outlined" color="neutral">
            back
          </Button>
          <Stepper alternativeLabel activeStep={1}>
            <Step key={1} completed={false}>
              <StepLabel>Upload</StepLabel>
            </Step>
            <Step key={2}>
              <StepLabel>Settings</StepLabel>
            </Step>
            <Step key={3}>
              <StepLabel>Send</StepLabel>
            </Step>
          </Stepper>

          <Button size="small" variant="contained" color="primary">
            next
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default fileZone;
