import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

// const rootElement = ReactDOM.createRoot(document.getElementById("root")


ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
  </Router>,
  document.getElementById("root")
);