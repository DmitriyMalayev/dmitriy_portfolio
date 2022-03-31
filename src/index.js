import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Main from "./routes/Main";
import Projects from "./routes/Projects";
import Project from "./routes/Project";
import Navbar from "./Navbar"
import Skills from "./routes/Skills";
import Testimonials from "./routes/Testimonials";
import "./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<About />} path="/About" />
      <Route element={<Main />} path="/Main" />
      <Route element={<Projects />} path="/Projects" />
      <Route element={<Project />} path="/Project" />
      <Route element={<Skills />} path="/Skills" />
      <Route element={<Testimonials />} path="/Testimonials" />
      <Route element={<Contact />} path="/Contact" />
    </Routes>
  </BrowserRouter>,
  rootElement
);