import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
// import Ecommerce from "./Components/Ecommerce";
import PostForm from "./Components/PostForm";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Welcome to Vite-React</h1>} />
          <Route path="/home" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
