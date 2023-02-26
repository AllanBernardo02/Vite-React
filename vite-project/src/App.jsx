import React from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
