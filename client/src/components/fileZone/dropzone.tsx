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
  Divider,
} from "@mui/material";
import { FileUploadRounded } from "@mui/icons-material";
import "./style.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { RootState } from "@/state";
import { filesActions } from "@/state/reducers/filesReducer";

const Dropzone = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const onDrop = useCallback((acceptedFiles: any[]) => {
    dispatch(filesActions.add(acceptedFiles));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    height: "100%",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    width: "100%",
  }));

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
  ];

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
        {test}
      </Box>
      {state.files.files.length > 0 && (
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
          {state.files.files.map((file, i) => (
            <Item key={i}>{file.name}</Item>
          ))}
        </Stack>
      )}
    </FlexBetween>
  );
};

export default Dropzone;
