import React from "react";
import "../CartPage3.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CartPage = () => {
  return (
    <>

      <NavBar />

      <div className="about_heading">
        <div className="overlap"></div>
        <h1>My Cart</h1>
      </div>
      <div className="cart-page4">
        <h1 className="cart-title4">Shopping Cart</h1>

        <div className="cart-container4">
          <div className="cart-left4">
            <div className="cart-message4">
              <span>You are <strong>£92.05</strong> away from <strong>FREE SHIPPING!</strong></span>
            </div>

            <div className="cart-item4">
              <div className="cart-image4">
                <img src="https://i.imgur.com/3fJ1P48.png" alt="product" />
              </div>
              <div className="cart-details4">
                <h2 className="cart-product-title4">Creamy Garlic Bliss</h2>
                <p className="cart-product-size4">Size: Small Jar (5 oz / 148 ml)</p>
              </div>
              <div className="cart-quantity4">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="cart-price4">
                <span>£7.95</span>
              </div>
              <div className="cart-remove4">&times;</div>
            </div>
          </div>

          <div className="cart-right4">
            <h2 className="order-summary-title4">Order Summary</h2>
            <label className="cart-note-label4" htmlFor="note">Add a note to your order</label>
            <textarea className="cart-note4" id="note" rows="4"></textarea>

            <div className="cart-summary4">
              <div className="cart-subtotal-row4">
                <span>Subtotal</span>
                <span>£7.95 GBP</span>
              </div>
              <p className="cart-summary-info4">
                Tax included and shipping calculated at checkout
              </p>
              <button className="checkout-button4">CHECK OUT</button>
              <button className="continue-shopping4">Continue shopping <span className="arrow4">&rarr;</span></button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
};

export default CartPage;