import { Link } from "react-router-dom";

export default function MiddleHeader() {
  return (
    <div className="middle-header">
      <Link to="/" className="logo">
        Book <i className="bi bi-book"></i> Store
      </Link>
      <div className="search-engine">
        <input type="text" placeholder="Search in Our Book Store" />
        <i className="bi bi-search"></i>
      </div>
      <Link to="/cart" className="cart-icon">
        <i className="bi bi-cart"></i>
      </Link>
    </div>
  );
}
