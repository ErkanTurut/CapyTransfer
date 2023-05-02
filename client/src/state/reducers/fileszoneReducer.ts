import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  upload: {
    totalFilesSize: 0,
    files: Array<any>(),
  },
  settings: {
    note: "",
  },
  stepper: {
    step: 0,
  },
};

const fileszoneSlice = createSlice({
  name: "fileszone",
  initialState,
  reducers: {
    uploadFile: (state, action) => {
      action.payload.forEach((file: any) => {
        console.log(action.payload);
        state.upload.totalFilesSize += file.size;
        file.id = state.upload.files.length + 1;
        state.upload.files = [...state.upload.files, file];
      });
    },
    removeFile: (state, action) => {
      state.upload.files = state.upload.files.filter(
        (file) => file.id !== action.payload
      );
      console.log(state.upload.files);
    },
    incrementStep: (state, action) => {
      if (state.stepper.step === action.payload.length) return;
      state.stepper.step++;
    },
    decrementStep: (state) => {
      if (state.stepper.step === 0) return;
      state.stepper.step--;
    },
    setStep: (state, action) => {
      state.stepper.step = action.payload.step;
    },
  },
});

export const { uploadFile, removeFile, incrementStep, decrementStep, setStep } =
  fileszoneSlice.actions;
export default fileszoneSlice.reducer;
