import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/footer.css"; // Make sure to create a CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <h3>About conference</h3>
        <p>
          The conference aims at bringing together researchers and practitioners
          in the world working on Data Science and Artificial Intelligence
          Applications. This conference seeks to bring together international
          researchers to present papers and generate discussions in recent
          trends and developments of computing.
        </p>
        <ul class="socials">
          <li>
            <a href="#">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <h3>Contact</h3>
        <div className="contact">
          {" "}
          <i class="fa-solid fa-user"></i>
          <p> Dr. M. Ramalingam</p>
          <i class="fa-solid fa-phone"></i>
          <p> 9677688934</p>
          <i class="fa-solid fa-envelope"></i>
          <p>icdsaia@gascgobi.ac.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
