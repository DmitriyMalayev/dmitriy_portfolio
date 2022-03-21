import React from "react";
import { projects as skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div>
        <div>
          <h1>Skills &amp; Technologies</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div>
          {skills.map((skill) => (
            <div key={skill}>
              <div>
                <span>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
