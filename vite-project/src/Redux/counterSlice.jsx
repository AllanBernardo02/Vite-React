import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
};

const counterSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setData, showLoading, hideLoading } = counterSlice.actions; // These action creators can be used to dispatch actions to the Redux store and update the state.

export default counterSlice.reducer;
