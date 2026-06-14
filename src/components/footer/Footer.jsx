import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-media">
          Follow Us on Social Media
          <div className="icons">
            <div className="icon">
              <i
                className="bi bi-instagram instagram"
                style={{ color: "#E4405F" }}
              ></i>
            </div>
            <div className="icon">
              <i
                className="bi bi-telegram telegram"
                style={{ color: "#28A9EB" }}
              ></i>
            </div>
            <div className="icon">
              <i
                className="bi bi-facebook facebook"
                style={{ color: "#1877F2" }}
              ></i>
            </div>
            <div className="icon">
              <i
                className="bi bi-youtube youtube"
                style={{ color: "#CD201F" }}
              ></i>
            </div>
            <div className="icon">
              <i
                className="bi bi-twitter-x twitter-x"
                style={{ color: "#000" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="col">
            <div className="list-title">
              <h4>Usefull Links</h4>
            </div>
            <ul>
              <li>Home</li>
              <li>Authors</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col">
            <div className="list-title">
              <h4>Contact Information</h4>
            </div>
            <ul>
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                Syria - Damascus - Al Abed Street
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                123-456-789
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                info@fakeemail.com
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="list-title">
              <h4>About Us</h4>
            </div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sint
            illo earum recusandae excepturi aliquid porro minus adipisci fuga
            enim, autem blanditiis facere aspernatur veritatis beatae, voluptate
            velit maxime sapiente reprehenderit atque cum ad repellendus
            consequuntur architecto? Corrupti rerum autem adipisci eaque, quidem
            reiciendis, quisquam blanditiis culpa sapiente qui perspiciatis.
          </div>
        </div>
      </div>
    </footer>
  );
}