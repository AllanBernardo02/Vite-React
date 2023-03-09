import axios from "axios";
import React from "react";
import { hideLoading, setData, showLoading } from "./counterSlice";

export const fetchData = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(hideLoading());
    dispatch(setData(response.data));
    console.log("success", setData(response.data));
  } catch (error) {
    dispatch(showLoading());
  }
};

export const PostData = (values) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      values
    );
    dispatch(hideLoading());
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(showLoading());
  }
};
