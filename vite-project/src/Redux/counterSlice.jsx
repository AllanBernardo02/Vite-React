import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "post",
  initialState: [
    // {
    //   id: 1,
    //   title: "Learn Redux Toolkit",
    //   content:
    //     "This abstracts the standard recommended approach for handling async request lifecycles.",
    // },
    // {
    //   id: 2,
    //   title: "Learn Redux Toolkit",
    //   content:
    //     "This abstracts the standard recommended approach for handling async request lifecycles.",
    // },
    {
      id: 1,
      title: "qwe",
      content:
        "This abstracts the standard recommended approach for handling async request lifecycles.",
    },
  ],

  reducers: {
    postAdd: (state, action) => {
      state.push(action.payload);
    },
    postAdd2: (state, action) => {
      state;
    },
  },
});

export const { postAdd, postAdd2 } = counterSlice.actions; // These action creators can be used to dispatch actions to the Redux store and update the state.

export default counterSlice.reducer;
