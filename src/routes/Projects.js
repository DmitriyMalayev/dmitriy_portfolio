import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  let projectsData = projects;
  return (
    <div className="flex flex-wrap -m-4">
      <nav>
        {projectsData.map((project) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/projectData/${project.title}`}
            key={project.image}
          >
            {project.description}
          </Link>
        ))}
      </nav>
    </div>
  );
}
