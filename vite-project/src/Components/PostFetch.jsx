import React from "react";
import { useSelector } from "react-redux";
import PostList from "./PostList";

const PostFetch = () => {
  const post = useSelector((state) => state.post.data);
  return (
    <div>
      {post.map((post) => (
        <PostList key={post.id} posts={post} />
      ))}
    </div>
  );
};

export default PostFetch;
