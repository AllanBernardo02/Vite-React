import React from "react";

const PostInput = ({ HandleChange, value, value2, id1, id2 }) => {
  return (
    <div>
      <input
        placeholder="title"
        id={id1}
        onChange={HandleChange}
        value={value}
      />
      <input
        placeholder="Content"
        id={id2}
        onChange={HandleChange}
        value={value2}
      />
    </div>
  );
};

export default PostInput;
