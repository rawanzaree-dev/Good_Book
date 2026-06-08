export default function Navbar({toggle, setToggle}) {
    return (
        <nav style={{left: toggle && "0"}}>
        <div className="container">
          <ul>
            <li onClick={() => setToggle(false)}>Home</li>
            <li onClick={() => setToggle(false)}>Authors</li>
            <li onClick={() => setToggle(false)}>About Us</li>
            <li onClick={() => setToggle(false)}>Contact Us</li>
            <li onClick={() => setToggle(false)}>Register</li>
          </ul>
        </div>
      </nav>
    );
}