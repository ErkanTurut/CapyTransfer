import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
//mport authReducer from './authReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  //auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;