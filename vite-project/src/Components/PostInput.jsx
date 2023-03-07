import React from "react";

const PostInput = ({ HandleChange, HandleChange2, value, value2 }) => {
  return (
    <div>
      <input placeholder="title" onChange={HandleChange} value={value} />
      <input placeholder="Content" onChange={HandleChange2} value={value2} />
    </div>
  );
};

export default PostInput;
