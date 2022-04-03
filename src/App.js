import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div >
      <nav>
        <ul className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
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
