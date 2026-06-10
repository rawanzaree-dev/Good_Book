import "./services.css";

export default function Services() {
  return (
    <div className="services">
      <div className="container">
        <div className="item">
          <i className="bi bi-truck" style={{color: "#FCBB2E"}}></i>
          Free Shipping
        </div>
        <div className="item">
          <i className="bi bi-gift" style={{color: "#ff7c92"}}></i>
          Gift Card
        </div>
        <div className="item">
          <i className="bi bi-arrow-clockwise" style={{color: "#18af91"}}></i>7 Days Return
        </div>
        <div className="item">
          <i className="bi bi-send" style={{color: "#df0fdf"}}></i>
          Contact Us
        </div>
      </div>
    </div>
  );
}