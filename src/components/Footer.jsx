import React from "react";
import "../Footer.css";
import footer from '../assets/footer_icons.webp'
import footer2 from '../assets/footer_icons_2.png'

const Footer = () => {
  return (
    <>
    
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" width="100%" className="svgim2" >
      <path fill="#ed1c24" d="M0,120 C360,600 1000,-100 1440,200 L1440,320 L0,320 Z"></path>
    </svg>

    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>OUR STORE</h3>
          <p>
            Visit our store at 123 Fake St., Toronto for high-tech and great customer service. 
            Find your perfect look today.
          </p>
          <div className="subscribe-box">
            <input type="email" placeholder="Email address" />
            <button >SUBSCRIBE</button>
          </div>
          <div className="social-icons">
            <img src={footer2} alt="" />
          </div>
        </div>

        <div className="footer-section">
          <h3>ABOUT US</h3>
          <ul>
            <li>About us</li>
            <li>Contact</li>
            <li>Faqs</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SERVICES</h3>
          <ul>
            <li>Cart</li>
            <li>My Account</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="resh3">@Metro Masala</h3>
          <div className="image-grid autoshowAnimation">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="image-box" />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>PRIVACY POLICY</p>
        
        <div className="payment-icons">
          <img src={footer} alt="" />
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025, Metro Masala</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
