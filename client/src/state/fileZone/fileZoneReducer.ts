import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  step: 0,
};

const fileZoneSlice: any = createSlice({
  name: "fileZone",
  initialState,
  reducers: {
    next: (state) => {
      if (state.step === 2) return;
      state.step++;
    },
    back: (state) => {
      if (state.step === 0) return;
      state.step--;
    },
  },
});

export const { next } = fileZoneSlice.actions;
export default fileZoneSlice.reducer;
