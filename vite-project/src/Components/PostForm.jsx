import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdd } from "../Redux/counterSlice";
const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const HandleChange = (e) => {
    setTitle(e.target.value);
  };
  const HandleChange2 = (e) => {
    setContent(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postAdd({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => Submit(e)}>
        <input placeholder="title" onChange={HandleChange} value={title} />
        <input placeholder="Content" onChange={HandleChange2} value={content} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
