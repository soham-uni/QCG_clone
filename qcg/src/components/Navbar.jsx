import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/github">Github</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
