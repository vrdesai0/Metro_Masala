import React, { useState } from 'react';
import '../ProductDetail.css';
import redCh from '../assets/cr_1.jpg'
import haldi from '../assets/cr_2.jpg'
import dhaniya from '../assets/cr_3.jpg'
import vege from '../assets/cr_5.jpg'
import back2 from '../assets/extra_back1.jpg'
import Testimonials from './Testimonials';
import Footer from './Footer';
import ProductListing from './ProductListing';
import RelatedProducts from './RelatedProducts';
import NavBar from './NavBar';

const images = [
  `${redCh}`,
  `${haldi}`,
  `${dhaniya}`,
  `${vege}`,
  `${redCh}`,
];


const ProductDetail = () => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [size, setSize] = useState('Small Jar (5 oz / 148 ml)');
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleAddToCart = () => {
    const newItem = { image: mainImage, size, quantity };
    setCartItems([...cartItems, newItem]);
    setSidebarOpen(true);
  };

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  const handleButtonClick1 = (e) => {
    setSize('Small Jar (5 oz / 148 ml)');
    document.getElementById('btn2').classList.remove('active');
    document.getElementById('btn3').classList.remove('active');
    e.target.classList.toggle('active')
  }
  const handleButtonClick2 = (e) => {
    setSize('Small Jar (5 oz / 148 ml)');
    document.getElementById('btn1').classList.remove('active');
    document.getElementById('btn3').classList.remove('active');
    e.target.classList.toggle('active')
  }
  const handleButtonClick3 = (e) => {
    setSize('Small Jar (5 oz / 148 ml)');
    document.getElementById('btn1').classList.remove('active');
    document.getElementById('btn2').classList.remove('active');
    e.target.classList.toggle('active')
  }
  const handleCartBtn = () => {
    document.getElementById('cartbtn1').classList.add('active');
    document.getElementById('cartbtn2').classList.add('active2');

  }
  const handleCartBtn2 = () => {
    document.getElementById('cartbtn1').classList.remove('active');
    document.getElementById('cartbtn2').classList.remove('active2');

  }

  return (
    <>
    <NavBar />
      <div className="product-detail-container">
        <div className="product-images">
          <img
            src={mainImage}
            alt="Main"
            className="main-image zoomable"
          />
          <div className="thumbnail-list ">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumb ${idx}`}
                onClick={() => setMainImage(img)}
                className='thumbnail-image'
              // className={mainImage === img ? 'active' : ''} 
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h2 className='product-title'>Spicy Sweet Delight</h2>
          <p className="price">£7.95 <span className="tax-note">Tax included.</span></p>
          <h4 className='ingredients'>Ingredients:</h4>
          <p>Organic Tamari Sauce (Water, Organic Soybeans, Organic Rice, Sea Salt)...</p>
          <h4 className='allergen'>Allergen Statement:</h4>
          <p>Contains Soy, Sesame.</p>

          <div className="size-options">
            <button className='size-button' id='btn1' onClick={handleButtonClick1} >Small Jar</button>
            <button className='size-button' id='btn2' onClick={handleButtonClick2} >Medium Jar</button>
            <button className='size-button' id='btn3' onClick={handleButtonClick3} >Large Jar</button>
          </div>

          <div className="quantity-controls">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>

          <div className="cart-buttons">
            <button className="add-to-cart" id='cartbtn1' onMouseLeave={handleCartBtn2} onMouseOver={handleCartBtn} onClick={handleAddToCart}>ADD TO CART</button>
            <button className="buy-now" id='cartbtn2'>BUY IT NOW</button>
          </div>

          <div className="policy-dropdown">
            <div className="dropdown-toggle" onClick={() => toggleDropdown('shipping')}>
              <p>SHIPPING POLICY</p>
              {activeDropdown === 'shipping' && (
                <div className="dropdown-content">Shipping details go here...</div>
              )}
            </div>
            <div className="dropdown-toggle" onClick={() => toggleDropdown('returns')}>
              <p>RETURNS & EXCHANGES</p>
              {activeDropdown === 'returns' && (
                <div className="dropdown-content">Return policy goes here...</div>
              )}
            </div>
          </div>
        </div>

        {sidebarOpen && (
          <div className="cart-sidebar open">
            <div className="closebtn">
            <h3>Your Cart </h3>
              <span onClick={()=> setSidebarOpen(false)}>X</span>
            </div>
            
            {cartItems.map((item, idx) => (
              <div key={idx} className="cart-item">
                <img src={item.image} alt="item" />
                <div>
                  <p>{item.size}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="cart-footer">
              <button className="view-cart" >View Cart</button>
              <button className="checkout">Checkout</button>
            </div>
          </div>
        )}
      </div>
      <RelatedProducts />
      <div className="back1" style={{ position: 'relative', display: 'flex', alignItems: 'center'}}>
          <div className="overlap" style={{left: '-10px'}}></div>
          <div className="brand_name" style={{zIndex: '1', color:'white', borderRight: 'none' }}><h1 style={{borderRight: '1px solid white'}}><span style={{color: 'red' }}>M</span>etro<br /><span style={{color: 'red' }}>M</span>asala</h1></div>
        <img src={back2} className='back1_img' alt="" style={{
          // opacity: currentSection === 2 ? 1 : 0,
          
        }} />
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default ProductDetail;
