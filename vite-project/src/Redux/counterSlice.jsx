import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
      content:
        "This abstracts the standard recommended approach for handling async request lifecycles.",
    },
  ],

  reducers: {
    postAdd: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { postAdd } = counterSlice.actions; // These action creators can be used to dispatch actions to the Redux store and update the state.

export default counterSlice.reducer;
