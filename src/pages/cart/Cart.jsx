import "./cart.css";
import CartItem from "./CartItem";
import Order from "./Order";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  ).toFixed(2);

  return (
    <div className="cart">
      <div className="container">
        <div className="title">
          <h2>Your Shopping Cart</h2>
        </div>
        <div className="content">
          <div className="rows">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <Order totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
}
