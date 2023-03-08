import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addPost } from "../Redux/counterSlice";
import PostInput from "./PostInput";
import PropsTry from "./PropsTry";
import PostList from "./PostList";
const PostForm = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toggle, setToggle] = useState(true);
  const post = useSelector((state) => state.post);

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
    setTitle(e.target.value);
  };
  const HandleChange2 = (e) => {
    setContent(e.target.value);
  };

  const postData = post.find((data) => data.title === title);
  console.log("data", postData);
  console.log("title", post);

  const Submit = (e) => {
    e.preventDefault();
    // if (title && content) {
    if (postData) {
      alert("Data already exists");
      return;
    }
    dispatch(
      addPost({
        id: nanoid(),
        title,
        content,
      })
    );

    setTitle("");
    setContent("");
  };
  // };

  return (
    <div>
      <form onSubmit={(e) => Submit(e)}>
        <PostInput
          HandleChange={HandleChange}
          HandleChange2={HandleChange2}
          value={title}
          value2={content}
        />
        <button>Submit</button>
      </form>
      <PostList />
    </div>
  );
};

export default PostForm;
