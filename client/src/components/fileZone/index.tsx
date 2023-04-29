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
import "./style.css";
const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    console.log(acceptedFiles[0]);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
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
        {isDragActive ? (
          <Typography variant="subtitle2">DROP IT !!!!!!!!!!!!</Typography>
        ) : (
          <Typography variant="subtitle2">
            Drag 'n' drop some files here, or click to select files
          </Typography>
        )}
      </Box>
      <Stack
        className="custom-scrollbar"
        divider={<Divider flexItem />}
        spacing={0.5}
        sx={{
          width: "100%",
          maxHeight: 150,
          minHeight: 80,
          display: "flex",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {items.map((item) => (
          <Item key={item.id}>{item.name}</Item>
        ))}
      </Stack>
    </FlexBetween>
  );
};

export default Dropzone;
