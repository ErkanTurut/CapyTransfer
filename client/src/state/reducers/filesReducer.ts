import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  totalFiles: 0,
  totalFilesSize: 0,
  files: Array<any>(),
};

const uploadFilesSlice = createSlice({
  name: "uploadFiles",
  initialState,
  reducers: {
    uploadFile: (state, action) => {
      action.payload.forEach((file: any) => {
        console.log(action.payload);
        state.totalFiles++;
        state.totalFilesSize += file.size;
        file.id = state.totalFiles;
        state.files = [...state.files, file];
      });
    },
    removeFile: (state, action) => {
      //you have to find the id of the file to remove and then remove it from the array of files

      state.files = state.files.filter((file) => file.id !== action.payload);

      console.log(state.files);
    },
  },
});

export const { uploadFile, removeFile } = uploadFilesSlice.actions;
export default uploadFilesSlice.reducer;
