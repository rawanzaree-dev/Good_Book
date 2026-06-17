import "./modal.css";
import Rating from "../book-slider/Rating";

export default function Modal({ setOpenModal, bookData, folder_name }) {
  const { title, inStock, rating, reviews, author, price, image } = bookData;

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
              />
              <button>
                <i className="bi bi-cart-plus"></i>
                Add to Cart
              </button>
            </div>
            <button className="details">See More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
