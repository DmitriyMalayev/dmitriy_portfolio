import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <h1 className="bg-blue-400">Hello world!</h1>
      <nav>
        <ul className="flex items-center justify-between flex-wrap bg-blue-400 mx-auto">
          <Link className="hover:text-blue-800" to="/home">
            Home
          </Link>
          <Link className="hover:text-blue-800" to="/about">
            About
          </Link>
          <Link className="hover:text-blue-800" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-blue-800" to="/projects">
            Projects
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
