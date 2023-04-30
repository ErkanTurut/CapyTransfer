import { combineReducers, createStore } from "redux";

import storage from "redux-persist/lib/storage";

//import authReducer from './reducers/authReducer';
import themeReducer from "./reducers/themeReducer";

import { configureStore } from "@reduxjs/toolkit";
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
import rootReducer from "@/state";
import { type } from "os";

const store = createStore(rootReducer);

// const store = configureStore({
//   reducer: reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

export default store;
