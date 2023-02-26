import React from "react";
import { useSelector } from "react-redux";
const PostList = () => {
  const post = useSelector((state) => state.post);

  const postRender = post.map((data) => (
    <div key={data.id} style={{ backgroundColor: "grey" }}>
      <h2>{data.title}</h2>
      <h4>{data.content}</h4>
    </div>
  ));

  return <div>{postRender}</div>;
};

export default PostList;
