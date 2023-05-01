import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  files: Array<any>(),
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    add: (state, action) => {
      action.payload.forEach((file: any) => {
        state.files = [...state.files, file];
      });

      //state.files = [...state.files, action.payload];
    },
    remove: (state, action) => {
      state.files.splice(action.payload, 1);
    },
  },
});

export const filesActions = filesSlice.actions;
export default filesSlice.reducer;
