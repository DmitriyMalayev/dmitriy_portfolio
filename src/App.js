import Home from "./routes/Home";
import Navbar from "./routes/Navbar";
import Skills from "./routes/Skills";
import Work from "./routes/Work";
import Contact from "./routes/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
