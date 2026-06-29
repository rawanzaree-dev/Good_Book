import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

export default function MiddleHeader() {
  const { cartItemsLength } = useContext(CartContext);
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
        {cartItemsLength > 0 && <span className="cart-notification">{cartItemsLength}</span>}
        <i className="bi bi-cart"></i>
      </Link>
    </div>
  );
}
