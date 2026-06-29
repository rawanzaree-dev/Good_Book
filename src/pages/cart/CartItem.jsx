import "./cart.css";
import getFolderName from "../../utils/getFolderName";

export default function CartItem({ item, addToCart, removeFromCart }) {
  const { image, title, author, quantity, price, category, id } = item;
  const folder_name= getFolderName(category);
  
  return (
    <div className="row">
      <div className="image">
        <img src={`${folder_name}/${image}`} alt={title} />
      </div>
      <div className="info">
        <div className="text">
          <p>
            <span>Title: </span>
            {title}
          </p>
          <p>
            <span>Author: </span>
            {author}
          </p>
        </div>
        <div className="quantity">
          <div className="btns">
            <button onClick={() => addToCart({...item, quantity: quantity < 20 ? +quantity + 1 : 20})}>
              <i className="bi bi-plus-lg"></i>
            </button>
            {quantity}
            <button onClick={() => addToCart({...item, quantity: quantity > 1 ? +quantity - 1 : 1})}>
              <i className="bi bi-dash-lg"></i>
            </button>
          </div>
          <p className="price">${(price * quantity).toFixed(2)}</p>
          <div className="remove-item" onClick={() => removeFromCart(id)}>
            <i className="bi bi-trash-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
