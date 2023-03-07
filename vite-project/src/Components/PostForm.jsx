import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdd, postAdd2 } from "../Redux/counterSlice";
import PostInput from "./PostInput";
import PropsTry from "./PropsTry";
const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toggle, setToggle] = useState(true);
  const post = useSelector((state) => state.post);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("post"));
    if (savedTasks) {
      dispatch(postAdd2(savedTasks));
    }
  }, []);

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
  console.log("title", title);

  const Submit = (e) => {
    e.preventDefault();
    // if (title && content) {
    if (postData) {
      alert("Data already exists");
      return;
    }
    dispatch(
      postAdd({
        id: nanoid(),
        title,
        content,
      })
    );

    setTitle("");
    setContent("");
  };
  // };

  const text = [
    {
      content: "Props for Single Resposibilty Principle",
    },
    {
      content: "Props for Open and Closed Principle",
    },
  ];
  const toggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <form onSubmit={(e) => Submit(e)}>
        {/* <input placeholder="title" onChange={HandleChange} value={title} />
        <input placeholder="Content" onChange={HandleChange2} value={content} /> */}
        <PostInput
          HandleChange={HandleChange}
          HandleChange2={HandleChange2}
          value={title}
          value2={content}
        />
        <button>Submit</button>
      </form>
      <div>
        {toggle ? <PropsTry text={[...text]} /> : <h1>Null</h1>}
        <button onClick={toggleClick}>Toggle</button>
      </div>
    </div>
  );
};

export default PostForm;
