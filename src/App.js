import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-500">Main App</h1>

      <div className="bg-blue-100">
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </div>
  );
}
