import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  let projectData = projects;
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {projectData.map((project) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/projectData/${project.title}`}
            key={project.image}
          >
            {project.description}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
