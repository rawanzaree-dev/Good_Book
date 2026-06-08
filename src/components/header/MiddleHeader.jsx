export default function MiddleHeader() {
  return (
    <div className="middle-header">
      <div className="logo">
        Book <i className="bi bi-book"></i> Store
      </div>
      <div className="search-engine">
        <input type="text" placeholder="Search in Our Book Store" />
        <i className="bi bi-search"></i>
      </div>
      <i className="bi bi-cart cart-icon"></i>
    </div>
  );
}