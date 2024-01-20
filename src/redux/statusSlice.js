// src/features/statusSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    value: "normal",
    data: {
      temp: 0,
      co2: 0,
    },
  },
  reducers: {
    setStatus: (state, action) => {
      state.value = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setStatus, setData } = statusSlice.actions;

export const selectStatus = (state) => state.status.value;
export const selectData = (state) => state.status.data;

export default statusSlice.reducer;
