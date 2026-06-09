import "./slider.css";
import FirstImage from "../../images/book1.png";
import SecondImage from "../../images/book2.png";
import ThirdImage from "../../images/book3.png";
import { useState } from "react";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <div className="slider">
      <div className="arrows">
        <div onClick={() => handleClick("left")} className="icon">
          <i className="bi bi-chevron-double-left left"></i>
        </div>
        <div onClick={() => handleClick("right")} className="icon">
          <i className="bi bi-chevron-double-right right"></i>
        </div>
      </div>
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="container"
      >
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)",
          }}
          className="item"
        >
          <div className="image">
            <img src={FirstImage} alt="Group Of Books" />
          </div>
          <div className="text">
            <h2>Book Store</h2>
            <p>It's not just reading. it's living the adventure</p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)",
          }}
          className="item"
        >
          <div className="image">
            <img src={SecondImage} alt="Group Of Books" />
          </div>
          <div className="text">
            <h2>The Books For Everyone</h2>
            <p>You can read at the book store or at home</p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 80%, rgba(252, 176, 69, 1) 100%)",
          }}
          className="item"
        >
          <div className="image">
            <img src={ThirdImage} alt="Group Of Books" />
          </div>
          <div className="text">
            <h2>Check Out The New Titles</h2>
            <p>We send you the book you want at home</p>
          </div>
        </div>
      </div>
    </div>
  );
}