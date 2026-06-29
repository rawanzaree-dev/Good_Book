import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/rating/Rating";
import "../../components/rating/rating.css";
import "./book.css";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import getFolderName from "../../utils/getFolderName";

export default function Book() {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(1);

  const { category, id } = useParams();
  const book = books.find((b) => b.id === +id),
   folder_name = getFolderName(category);

  return (
    <div className="book">
      <div className="container">
        <div className="first-content">
          <div className="image">
            <img src={`/${folder_name}/${book.image}`} alt={book.title} />
          </div>
          <div className="first-info">
            <h2>{book.title}</h2>
            <p className="author">
              by <span>{book.author}</span> (Author)
            </p>
            <Rating rating={book.rating} reviews={book.reviews} />
            <div className="add-to-cart">
              <input
                type="number"
                name="quantity"
                min="1"
                max="100"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button onClick={() => addToCart({ ...book, quantity: qty })}>
                <i className="bi bi-cart-plus"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          iure, quis quia harum modi at rem facilis! Voluptate nam sint soluta
          ducimus, explicabo a, minus omnis quis veniam fugit magni sequi.
          Minima, recusandae distinctio error incidunt, ipsam culpa, voluptate
          adipisci ut perspiciatis sed itaque alias saepe? Obcaecati corrupti
          maiores delectus veniam a voluptatibus. Alias temporibus perferendis
          obcaecati mollitia consequuntur praesentium minus quis quas, ullam
          laborum quaerat minima rerum voluptatibus harum dolor veniam. Rerum
          sint officia tempore? Omnis vitae, molestias enim alias ipsum nam
          architecto maiores corrupti repellat voluptatem fugit. Beatae cumque
          impedit necessitatibus? Veritatis voluptas reiciendis tempore enim.
          Enim, sed?
        </p>
        <div className="second-info">
          <div className="col">
            Print Length
            <i className="bi bi-file-break"></i>
            <span>{book.printLength} Pages</span>
          </div>
          <div className="col">
            Language
            <i className="bi bi-globe"></i>
            <span>{book.language}</span>
          </div>
          <div className="col">
            Publication Date
            <i className="bi bi-calendar3"></i>
            <span>{book.PublicationDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
