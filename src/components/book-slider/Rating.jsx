export default function Rating({ rating, reviews }) {
  return (
    <div className="rating">
      <div className="stars">
        {rating >= 1 ? (
          <i className="bi bi-star-fill"></i>
        ) : rating >= 0.5 ? (
          <i className="bi bi-star-half"></i>
        ) : (
          <i className="bi bi-star"></i>
        )}
        {rating >= 2 ? (
          <i className="bi bi-star-fill"></i>
        ) : rating >= 1.5 ? (
          <i className="bi bi-star-half"></i>
        ) : (
          <i className="bi bi-star"></i>
        )}
        {rating >= 3 ? (
          <i className="bi bi-star-fill"></i>
        ) : rating >= 2.5 ? (
          <i className="bi bi-star-half"></i>
        ) : (
          <i className="bi bi-star"></i>
        )}
        {rating >= 4 ? (
          <i className="bi bi-star-fill"></i>
        ) : rating >= 3.5 ? (
          <i className="bi bi-star-half"></i>
        ) : (
          <i className="bi bi-star"></i>
        )}
        {rating >= 5 ? (
          <i className="bi bi-star-fill"></i>
        ) : rating >= 4.5 ? (
          <i className="bi bi-star-half"></i>
        ) : (
          <i className="bi bi-star"></i>
        )}
      </div>
      <p className="count">{rating}</p>
      <span className="reviews">({reviews} reviews)</span>
    </div>
  );
}