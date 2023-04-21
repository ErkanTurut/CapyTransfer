// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AuthState } from "@/types/states.types";

// const initialState: AuthState = {
//   mode: "light",
//   user: null,
//   files: [],
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setMode: (state) => {
//       state.mode = state.mode === "light" ? "dark" : "light";
//     },
//     setUser: (state, action: PayloadAction<any>) => {
//       state.user = action.payload;
//     },
//     setFiles: (state, action: PayloadAction<any[]>) => {
//       state.files = action.payload;
//     },
//     clearFiles: (state) => {
//       state.files = [];
//     },
//   },
// });

// export const { setMode, setUser, setFiles, clearFiles } = authSlice.actions;
// export default authSlice.reducer;
