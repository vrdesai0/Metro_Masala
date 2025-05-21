import React, { useState } from 'react';
import Footer from './Footer.jsx'
import '../../src/ProductListing.css';
import redCh from '../assets/cr_1.jpg'
import haldi from '../assets/cr_2.jpg'
import dhaniya from '../assets/cr_3.jpg'
import vege from '../assets/cr_5.jpg'
import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: 'Kashmiri Red Chillie',
    price: 700,
    category: 'Red Chillie',
    size: '1000gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 2,
    name: 'Patna Red Chillie',
    price: 400,
    category: 'Red Chillie',
    size: '1000gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 3,
    name: 'Mix Red Chillie',
    price: 600,
    category: 'Red Chillie',
    size: '1000gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 4,
    name: 'Kumthi Red Chillie',
    price: 600,
    category: 'Red Chillie',
    size: '1000gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 5,
    name: 'Selam Haldi',
    price: 400,
    category: 'Haldi',
    size: '1000gm',
    inStock: true,
    image: `${haldi}`,
  },
  {
    id: 6,
    name: 'Rajapuri Haldi',
    price: 400,
    category: 'Haldi',
    size: '1000gm',
    inStock: true,
    image: `${haldi}`,
  },
  {
    id: 7,
    name: 'Vegetable Masala',
    price: 600,
    category: 'Vegetable & Mutton Masala',
    size: '1000gm',
    inStock: true,
    image: `${vege}`,
  },
  {
    id: 8,
    name: 'Mutton Masala',
    price: 600,
    category: 'Vegetable & Mutton Masala',
    size: '1000gm',
    inStock: false,
    image: `${vege}`,
  },
  {
    id: 9,
    name: 'Dhaniya Powder',
    price: 400,
    category: 'Dhaniya Powder',
    size: '1000gm',
    inStock: true,
    image: `${dhaniya}`,
  },
  {
    id: 10,
    name: 'Kashmiri Red Chillie',
    price: 350,
    category: 'Red Chillie',
    size: '500gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 11,
    name: 'Patna Red Chillie',
    price: 200,
    category: 'Red Chillie',
    size: '500gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 12,
    name: 'Mix Red Chillie',
    price: 300,
    category: 'Red Chillie',
    size: '500gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 13,
    name: 'Kumthi Red Chillie',
    price: 300,
    category: 'Red Chillie',
    size: '500gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 14,
    name: 'Selam Haldi',
    price: 200,
    category: 'Haldi',
    size: '500gm',
    inStock: true,
    image: `${haldi}`,
  },
  {
    id: 15,
    name: 'Rajapuri Haldi',
    price: 200,
    category: 'Haldi',
    size: '500gm',
    inStock: true,
    image: `${haldi}`,
  },
  {
    id: 16,
    name: 'Vegetable Masala',
    price: 300,
    category: 'Vegetable & Mutton Masala',
    size: '500gm',
    inStock: true,
    image: `${vege}`,
  },
  {
    id: 17,
    name: 'Mutton Masala',
    price: 300,
    category: 'Vegetable & Mutton Masala',
    size: '500gm',
    inStock: false,
    image: `${vege}`,
  },
  {
    id: 18,
    name: 'Dhaniya Powder',
    price: 200,
    category: 'Dhaniya Powder',
    size: '500gm',
    inStock: true,
    image: `${dhaniya}`,
  },
  {
    id: 19,
    name: 'Kashmiri Red Chillie',
    price: 175,
    category: 'Red Chillie',
    size: '250gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 20,
    name: 'Patna Red Chillie',
    price: 100,
    category: 'Red Chillie',
    size: '250gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 21,
    name: 'Mix Red Chillie',
    price: 150,
    category: 'Red Chillie',
    size: '250gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 22,
    name: 'Kumthi Red Chillie',
    price: 150,
    category: 'Red Chillie',
    size: '250gm',
    inStock: true,
    image: `${redCh}`,
  },
  {
    id: 23,
    name: 'Selam Haldi',
    price: 100,
    category: 'Haldi',
    size: '250gm',
    inStock: true,
    image: `${haldi}`,
  },
  {
    id: 24,
    name: 'Rajapuri Haldi',
    price: 100,
    category: 'Haldi',
    size: '250gm',
    inStock: true,
    image: `${haldi}`,
  },
  {
    id: 25,
    name: 'Vegetable Masala',
    price: 150,
    category: 'Vegetable & Mutton Masala',
    size: '250gm',
    inStock: true,
    image: `${vege}`,
  },
  {
    id: 26,
    name: 'Mutton Masala',
    price: 150,
    category: 'Vegetable & Mutton Masala',
    size: '250gm',
    inStock: false,
    image: `${vege}`,
  },
  
  {
    id: 27,
    name: 'Dhaniya Powder',
    price: 100,
    category: 'Dhaniya Powder',
    size: '250gm',
    inStock: true,
    image: `${dhaniya}`,
  },
  
];

const ProductListing = () => {
  const [filters, setFilters] = useState({
    inStock: false,
    minPrice: 0,
    maxPrice: 1000,
    category: '',
    size: '',
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const filteredProducts = productsData.filter((product) => {
    return (
      (!filters.inStock || product.inStock) &&
      product.price >= filters.minPrice &&
      product.price <= filters.maxPrice &&
      (!filters.category || product.category === filters.category) &&
      (!filters.size || product.size === filters.size)
    );
  });

  return (
    <>
    <div className="container2">
      <aside className="filters">
        <h3>Filters</h3>
        <label>
          <input
            type="checkbox"
            name="inStock"
            checked={filters.inStock}
            onChange={handleFilterChange}
          />{' '}
          In stock
        </label>

        <div>
          <label>Min Price</label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
          <label>Max Price</label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div>
          <label>Category</label>
          <select name="category" onChange={handleFilterChange} value={filters.category}>
            <option value="">All</option>
            <option value="Red Chillie">Red Chillie</option>
            <option value="Haldi">Haldi</option>
            <option value="Vegetable & Mutton Masala">Vegetable & Mutton Masala</option>
            <option value="Dhaniya Powder">Dhaniya Powder</option>
          </select>
        </div>

        <div>
          <label>Size</label>
          <select name="size" onChange={handleFilterChange} value={filters.size}>
            <option value="">All</option>
            <option value="1000gm">1000gm</option>
            <option value="500gm">500gm</option>
            <option value="250gm">250gm</option>
          </select>
        </div>
      </aside>

      <main className="products2">
        {filteredProducts.map((product) => (
          <Link style={{textDecoration: 'none', color:'black'}} to='/product-details'>
          <div className="product-card2" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.size}</p>
            <p>₹{product.price}</p>
            <button>Add To Cart</button>
          </div>
          </Link>
        ))}
      </main>
    </div>

        <Footer />
    </>
  );
};

export default ProductListing;
