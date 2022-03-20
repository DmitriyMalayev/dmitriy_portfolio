import React from "react";
import { Outlet, Link } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";

// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div>
      <h1>Main App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
