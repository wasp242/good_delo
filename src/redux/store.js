// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./statusSlice";

export const store = configureStore({
  reducer: {
    status: statusReducer,
  },
});
