import React from "react";

const PostList = ({ posts }) => {
  return (
    <div key={posts.id} style={{ backgroundColor: "grey" }}>
      <h2>{posts.name}</h2>
      <h4>{posts.email}</h4>
      <h4>{posts.address.street}</h4>
      <h4>{posts.address.city}</h4>
    </div>
  );
};

export default PostList;
