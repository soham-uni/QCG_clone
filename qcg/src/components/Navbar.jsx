import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling
import qcgLogo from "./qcgLogo.png"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        
       <img src={qcgLogo} alt="QCG Logo" className="logo" />
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
    </div>
  );
}

export default Navbar;
