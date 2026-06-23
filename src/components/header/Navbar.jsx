import { Link } from "react-router-dom";

export default function Navbar({ toggle, setToggle }) {
  return (
    <nav style={{ left: toggle && "0" }}>
      <div className="container">
        <ul>
          <Link to="/" className="li-item" onClick={() => setToggle(false)}>Home</Link>
          <Link to="/authors" className="li-item" onClick={() => setToggle(false)}>Authors</Link>
          <Link to="/about" className="li-item" onClick={() => setToggle(false)}>About Us</Link>
          <Link to="/contact" className="li-item" onClick={() => setToggle(false)}>Contact Us</Link>
          <Link to="/register" className="li-item" onClick={() => setToggle(false)}>Register</Link>
        </ul>
      </div>
    </nav>
  );
}
