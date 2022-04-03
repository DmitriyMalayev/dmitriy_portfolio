import { Link, Outlet } from "react-router-dom";
import Logo from "./logo.svg";

function App() {
  return (
    <div>
      <nav>
        <ul className="w-full h-[100px] flex justify-between items-center bg-[#d3c6be] text-white">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "300px", left: "80px", top: "100px" }}
          />
          <Link className="hover:bg-blue-500" to="/home">
            Home
          </Link>
          <Link className="hover:bg-blue-500" to="/about">
            About
          </Link>
          <Link className="hover:bg-blue-500" to="/contact">
            Contact
          </Link>
          <Link className="hover:bg-blue-500" to="/projects">
            Projects
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
