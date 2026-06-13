import "./book-slider.css";
import Rating from "./Rating";
import { useState } from "react";

export default function BookSlider({data, folder_name}) {
  const [slideIndex, setSlideIndex]= useState(0);

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    }else {
      setSlideIndex(slideIndex + 1);
    }
  }

  return (
    <div className="book-slider">
      <div className="arrows">
        {slideIndex > 0 ? <div onClick={() => handleClick("left")} className="icon">
          <i className="bi bi-chevron-left left"></i>
        </div> : <div></div>}
        {slideIndex <= data.length - 1 ? <div onClick={() => handleClick("right")} className="icon">
          <i className="bi bi-chevron-right right"></i>
        </div> : <div></div>}
      </div>
      <div className="container" style={{transform: `translateX(${slideIndex * -335}px)`}}>
        {data.map((book) => (
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
              <i className="bi bi-eye-fill eye"></i>
              <i className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}