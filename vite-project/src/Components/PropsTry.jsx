import React from "react";

const PropsTry = ({ text }) => {
  return (
    <div>
      <h1>{text.map((text) => text.content)}</h1>
    </div>
  );
};

export default PropsTry;
