import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Work from "./routes/Work";
import Contact from "./routes/Contact";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="work" element={<Work />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
