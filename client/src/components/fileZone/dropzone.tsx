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
const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles: any[]) => {
    console.log(acceptedFiles);
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

  const Shadow = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    textAlign: "center",
    width: "100%",
    background:
      "linear-gradient(0deg, rgba(171,171,171,1) 0%, rgba(0,212,255,0) 100%)",
    position: "sticky",
    bottom: 0,

    display: "block",
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
          border: 2,
          borderColor: "neutral.light",
          borderRadius: 1,
          padding: 0.5,
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
