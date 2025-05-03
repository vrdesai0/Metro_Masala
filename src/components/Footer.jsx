import React from "react";
import "../Footer.css";
import footer from '../assets/footer_icons.webp'
import footer2 from '../assets/footer_icons_2.png'

const Footer = () => {
  return (
    <>
    
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ marginTop: '-90px', position: 'absolute' }}>
      <path fill="#ed1c24" d="M0,120 C360,600 1000,-100 1440,200 L1440,320 L0,320 Z"></path>
    </svg>

    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="autoshowAnimation">OUR STORE</h3>
          <p className="autoshowAnimation">
            Visit our store at 123 Fake St., Toronto for high-tech and great customer service. 
            Find your perfect look today.
          </p>
          <div className="subscribe-box">
            <input type="email" className="autoshowAnimation" placeholder="Email address" />
            <button  className="autoshowAnimation">SUBSCRIBE</button>
          </div>
          <div className="social-icons">
            <img src={footer2} className="autoshowAnimation" alt="" />
          </div>
        </div>

        <div className="footer-section">
          <h3 className="autoshowAnimation">ABOUT US</h3>
          <ul className="autoshowAnimation">
            <li>About us</li>
            <li>Contact</li>
            <li>Faqs</li>
            <li>Wishlist</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="autoshowAnimation">SERVICES</h3>
          <ul className="autoshowAnimation">
            <li>Cart</li>
            <li>My Account</li>
            <li>Checkout</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="autoshowAnimation">@Metro Masala</h3>
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
