import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "@/types/states.types";
const initialState: ThemeState = {
  isDarkTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.isDarkTheme = true;
    },
    setLightTheme: (state) => {
      state.isDarkTheme = false;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { setDarkTheme, setLightTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
