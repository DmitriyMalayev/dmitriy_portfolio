import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <div className="space-x-2 bg-blue-200">
        <Link className="hover:bg-sky-300" to="/main">
          Main
        </Link>
        <Link className="hover:bg-sky-300" to="/about">
          About
        </Link>
        <Link className="hover:bg-sky-300" to="/projects">
          Projects
        </Link>
        <Link className="hover:bg-sky-300" to="/skills">
          Skills
        </Link>
        <Link className="hover:bg-sky-300" to="/testimonials">
          Testimonials
        </Link>
        <Link className="hover:bg-sky-300" to="/contact">
          Contact
        </Link>
      </div>
      <Outlet />
      <h1 className="text-3xl font-bold underline text-blue-500">Main App</h1>
    </div>
  );
}
