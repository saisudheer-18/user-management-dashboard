import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2 className="logo">UserApp</h2>

      <nav className="nav">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Dashboard
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;