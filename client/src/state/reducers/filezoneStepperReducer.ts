import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  step: 0,
};

const filezoneStepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    increment: (state, action) => {
      if (state.step === action.payload.length) return;
      state.step++;
    },
    decrement: (state) => {
      if (state.step === 0) return;
      state.step--;
    },
    set: (state, action) => {
      state.step = action.payload.step;
    },
  },
});

export const filezoneStepperActions = filezoneStepperSlice.actions;
export default filezoneStepperSlice.reducer;
