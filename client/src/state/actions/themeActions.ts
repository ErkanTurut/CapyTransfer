import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThemeState } from "@/types/states.types";
import { toggleTheme } from "../reducers/themeReducer";

export const setThemeMode = createAsyncThunk(
  "theme/setThemeMode",
  async (themeMode: ThemeState, { dispatch }) => {
    try {
      dispatch(toggleTheme()); // use the toggleThemeMode action here
      // You can add any async code here, such as making an API request to update the user's theme preference on the server-side.
      return themeMode;
    } catch (error) {
      throw error;
    }
  }
);
