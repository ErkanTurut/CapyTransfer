import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer, fileszoneSlice } from "./reducers";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//mport authReducer from './authReducer';

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  theme: persistReducer(persistConfig, themeReducer),
  fileszone: fileszoneSlice,
  //auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
