import { useContext, useState } from "react";
import Rating from "../rating/Rating";
import "./modal.css";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import getFolderName from "../../utils/getFolderName";

export default function Modal({ setOpenModal, bookData}) {
  const [qty, setQty] = useState(1),
  { addToCart } = useContext(CartContext);

  const {
    title,
    inStock,
    rating,
    reviews,
    author,
    price,
    image,
    id,
    category,
  } = bookData;

  const folder_name= getFolderName(bookData.category);

  return (
    <div onClick={() => setOpenModal(false)} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="wrapper">
        <div className="icon">
          <i
            onClick={() => setOpenModal(false)}
            className="bi bi-x-lg close-icon"
          ></i>
        </div>
        <div className="content">
          <img src={`/${folder_name}/${image}`} alt={title} />
          <div className="col">
            <h2>{title}</h2>
            <p>
              <span>Status: </span>
              {inStock === true ? "In Stock" : "Unavailable"}
            </p>
            <Rating rating={rating} reviews={reviews} />
            <p className="author">
              <span>Author: </span>
              {author}
            </p>
            <p className="price">
              <span>Price: </span>${price}
            </p>
            <div className="add-to-cart">
              <input
                type="number"
                name="quantity"
                min="1"
                max="100"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button onClick={() => addToCart({...bookData, quantity: qty})}>
                <i className="bi bi-cart-plus"></i>
                Add to Cart
              </button>
            </div>
            <Link to={`/book/${category}/${id}`} className="details">
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
