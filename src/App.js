import Navbar from "./routes/Navbar";
import Home from "./routes/Home";



// import About from "./routes/About";
// import Skills from "./routes/Skills";
// import Work from "./routes/Work";
// import Contact from "./routes/Contact";
// import Testimonials from "./routes/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} /> */}
      </Routes>
    </div>
  );
}

export default App;
