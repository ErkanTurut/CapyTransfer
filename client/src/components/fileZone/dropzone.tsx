import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import FlexBetween from "@/components/utils/FlexBetween";
import {
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  styled,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { FileUploadRounded, DeleteRounded } from "@mui/icons-material";
import "./style.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "@/state";
import {
  uploadFile,
  removeFile,
  incrementStep,
  decrementStep,
  setStep,
} from "@/state/reducers/fileszoneReducer";

const Dropzone = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const onDrop = useCallback((acceptedFiles: any[]) => {
    dispatch(uploadFile(acceptedFiles));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    width: "100%",
  }));

  return (
    <FlexBetween
      sx={{
        flexDirection: "column",
        height: "100%",
        gap: 1,
        overflowX: "hidden",
      }}
    >
      <Box
        {...getRootProps()}
        sx={{
          minHeight: 150,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          padding: 2,
          border: 1,
          borderColor: "neutral.medium",
          backgroundColor: "neutral.light",
          borderRadius: 1,
        }}
      >
        <></>
        <input {...getInputProps()} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FileUploadRounded fontSize="large" />
          {isDragActive ? (
            <Typography variant="caption" sx={{ textAlign: "center" }}>
              DROP IT !!!!!!!!!!!!
            </Typography>
          ) : (
            <Typography variant="caption" sx={{ textAlign: "center" }}>
              Drag 'n' drop some files here, or click to select files
            </Typography>
          )}
        </Box>
      </Box>
      {state.fileszone.upload.files.length > 0 && (
        <Stack
          className="custom-scrollbar"
          divider={<Divider flexItem />}
          spacing={0.5}
          sx={{
            width: "100%",
            maxHeight: 150,
            display: "flex",
            overflowY: "auto",
            overflowX: "hidden",
            border: 2,
            borderColor: "neutral.light",
            borderRadius: 1,
            padding: 0.5,
          }}
        >
          {state.fileszone.upload.files.map((file, i) => (
            <Item key={i}>
              <FlexBetween sx={{ gap: 2 }}>
                <Typography variant="caption">{file.size}</Typography>
                <Typography
                  variant="caption"
                  sx={{
                    overflowWrap: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: 150,
                  }}
                >
                  {file.name}
                </Typography>
              </FlexBetween>

              <IconButton
                size="small"
                color="error"
                onClick={() => dispatch(removeFile(file.id))}
              >
                <DeleteRounded />
              </IconButton>
            </Item>
          ))}
        </Stack>
      )}
    </FlexBetween>
  );
};

export default Dropzone;
