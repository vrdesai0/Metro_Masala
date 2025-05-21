import React from 'react';
import '../RelatedProducts3.css';
import redCh from '../assets/cr_1.jpg'
import haldi from '../assets/cr_2.jpg'
import dhaniya from '../assets/cr_3.jpg'
import vege from '../assets/cr_5.jpg'

const products = [
  {
    brand: 'XyLoza',
    name: 'Tangy Mustard Fusion',
    price: '£7.95',
    image: `${redCh}`,
  },
  {
    brand: 'XyLoza',
    name: 'Roasted Garlic Passion',
    price: '£7.95',
    image: `${haldi}`,
  },
  {
    brand: 'XyLoza',
    name: 'Spicy Sesame Sauce',
    price: '£7.95',
    image: `${dhaniya}`,
  },
  {
    brand: 'Vezzo',
    name: 'Sweet Teriyaki Twist',
    price: '£7.95',
    image: `${vege}`,
  },
];

const RelatedProducts3 = () => {
  return (
    <div className="related-products3">
      <h2 className="related-products-title3">RELATED PRODUCTS</h2>
      <div className="related-products-grid3">
        {products.map((product, index) => (
          <div className="related-card3" key={index}>
            <div className="related-card-image-container3">
              <img src={product.image} alt={product.name} className="related-card-image3" />
              <div className="related-card-plus3">+</div>
            </div>
            <div className="related-card-info3">
              <p className="related-card-brand3">{product.brand}</p>
              <p className="related-card-name3">{product.name}</p>
              <p className="related-card-price3">from {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts3;
