import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addPost = createAsyncThunk(
  "post/addPost",
  async (id, title, content) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { id, title, content }
    );
    return response.data;
  }
);

export const getPost = createAsyncThunk("post/getPost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const counterSlice = createSlice({
  name: "post",
  initialState: [
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
      // state = [action.payload];
    },
    postAdd2: (state, action) => {
      state;
    },
  },
});

// export const { postAdd, postAdd2 } = counterSlice.actions; // These action creators can be used to dispatch actions to the Redux store and update the state.

export default counterSlice.reducer;
