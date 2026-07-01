import "./contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <div className="contact">
      <div className="container">
        <div className="info">
          <div className="col">
            <i className="bi bi-house-fill icon"></i>
            <span>Address</span>
            Damascus - Al Abed St
          </div>
          <div className="col">
            <i className="bi bi-telephone-fill icon"></i>
            <span>Phone</span>
            123-456-789
          </div>
          <div className="col">
            <i className="bi bi-envelope-fill icon"></i>
            <span>Email</span>
            info@fakeemail.com
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
