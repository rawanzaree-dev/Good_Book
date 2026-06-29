import Modal from "../modal/Modal";
import Rating from "../rating/Rating";
import "../rating/rating.css";
import "./book-slider.css";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import getFolderName from "../../utils/getFolderName";

export default function BookSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0),
    [openModal, setOpenModal] = useState(false),
    [bookData, setBookData] = useState(null);

  const { addToCart } = useContext(CartContext);

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  function handleModal(book) {
    setOpenModal(true);
    setBookData(book);
  }

  return (
    <div className="book-slider">
      <div className="arrows">
        {slideIndex > 0 ? (
          <div onClick={() => handleClick("left")} className="icon">
            <i className="bi bi-chevron-left left"></i>
          </div>
        ) : (
          <div></div>
        )}
        {slideIndex <= data.length - 1 ? (
          <div onClick={() => handleClick("right")} className="icon">
            <i className="bi bi-chevron-right right"></i>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div
        className="container"
        style={{ transform: `translateX(${slideIndex * -335}px)` }}
      >
        {data.map((book) => {
          const folder_name = getFolderName(book.category);
          return (
            <div className="item" key={book.id}>
              <div className="image">
                <img src={`/${folder_name}/${book.image}`} alt={book.title} />
              </div>
              <div className="content">
                <h4>{book.title}</h4>
                <Rating rating={book.rating} reviews={book.reviews} />
                <p className="price">${book.price}</p>
              </div>
              <hr />
              <div className="icons">
                <i
                  onClick={() => handleModal(book)}
                  className="bi bi-eye-fill eye"
                ></i>
                <div
                  className="cart-icon"
                  onClick={() => addToCart({ ...book, quantity: 1 })}
                >
                  <i className="bi bi-cart-plus"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          bookData={bookData}
        />
      )}
    </div>
  );
}
