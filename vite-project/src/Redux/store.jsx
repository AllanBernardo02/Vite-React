import { configureStore } from "@reduxjs/toolkit";
import counterAllan from "./counterSlice";

const store = configureStore({
  reducer: {
    post: counterAllan,
  },
});

export default store;
