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

import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "@/state";
import fileZoneComponents from "@/components/fileZone";
import {
  incrementStep,
  decrementStep,
  setStep,
} from "@/state/reducers/fileszoneReducer";
import {
  KeyboardArrowRightRounded,
  KeyboardArrowLeftRounded,
  SendRounded,
} from "@mui/icons-material";

const Filezone = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log(state);
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
          {fileZoneComponents[state.fileszone.stepper.step].component}
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            color="neutral"
            onClick={() => dispatch(decrementStep())}
            disabled={state.fileszone.stepper.step === 0}
            startIcon={<KeyboardArrowLeftRounded />}
          >
            back
          </Button>
          <Stepper activeStep={state.fileszone.stepper.step}>
            {fileZoneComponents.map((component, i) => (
              <Step key={i}>
                <StepLabel
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => {
                    dispatch(
                      setStep({
                        step: i,
                        length: fileZoneComponents.length - 1,
                      })
                    );
                  }}
                ></StepLabel>
              </Step>
            ))}
          </Stepper>

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(
                incrementStep({
                  length: fileZoneComponents.length - 1,
                })
              )
            }
            endIcon={
              state.fileszone.stepper.step === fileZoneComponents.length - 1 ? (
                <SendRounded />
              ) : (
                <KeyboardArrowRightRounded />
              )
            }
          >
            {state.fileszone.stepper.step === fileZoneComponents.length - 1
              ? "Send"
              : "Next"}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Filezone;
