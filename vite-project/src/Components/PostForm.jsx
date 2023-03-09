import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import PostInput from "./PostInput";
import PropsTry from "./PropsTry";
import PostList from "./PostList";
import { fetchData, PostData } from "../Redux/Action";
import PostFetch from "./PostFetch";
const PostForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const post = useSelector((state) => state.post.data);

  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("post"));
  //   if (savedTasks) {
  //     dispatch(postAdd2(savedTasks));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("post", JSON.stringify(post));
  }, [post]);

  const HandleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  // const postData = post.find((data) => data.name === namee);
  // console.log("data", postData);
  // console.log("title", post);

  const values = {
    name: data.name,
    email: data.email,
  };

  const Submit = (e) => {
    e.preventDefault();
    // if (title && content) {
    // if (postData) {
    //   alert("Data already exists");
    //   return;
    // }
    dispatch(PostData(values));

    setData({ name: "", email: "" });
  };
  // };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <form onSubmit={(e) => Submit(e)}>
        <PostInput
          HandleChange={HandleChange}
          HandleChange2={HandleChange}
          id1="name"
          id2="email"
          value={data.name}
          value2={data.email}
        />
        <button>Submit</button>
      </form>

      <PostFetch />
    </div>
  );
};

export default PostForm;
