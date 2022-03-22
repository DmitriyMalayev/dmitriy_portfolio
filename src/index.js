import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import About from "./routes/About";
import Contact from "./routes/Contact";
import Main from "./routes/Main";
import Projects from "./routes/Projects";
import Project from "./routes/Project";

import Skills from "./routes/Skills";
import Testimonials from "./routes/Testimonials";
import "./index.css"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="projects" element={<Projects />}>
          <Route
            index
            element={
              <main>
                <p>Select A Project</p>
              </main>
            }
          />
          <Route path=":projectTitle" element={<Project />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="main" element={<Main />} />
        <Route path="skills" element={<Skills />} />
        <Route path="testimonials" element={<Testimonials />} />

        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
