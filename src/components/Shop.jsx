import { Link } from 'react-router-dom';
import powderim from '../../src/assets/powder_spice_shop.png'
import wholeim from '../../src/assets/whole_spices_shop.png'
import wholechillie from '../../src/assets/whole_chillie_shop.png'
import specialim from '../../src/assets/special_spices_shop.png'
import NavBar from './NavBar';
import { useState } from 'react';
import ProductListing from './ProductListing';


function Whole_Spice() {
    return (
        <>
            <h1>hey</h1>
        </>
    )
}

function Shop() {

    const [showInner, setShowInner] = useState(false);
    return (
        <>

            <NavBar />

            <div className="about_heading">
                <div className="overlap"></div>
                <h1>Shop</h1>
            </div>

            <section style={{ textAlign: 'center', padding: '40px 20px', fontFamily: "'Arial', sans-serif" }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '40px' }}>Select Category</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '30px', maxWidth: '1200px', margin: 'auto' }}>
                    
                    <div onClick={() => setShowInner(true)} style={{cursor:'pointer'}}>
                        <img src={powderim} alt="Garlic & Onion" style={{ width: '100%', bordeRadius: '50%' }} />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Powder Spices</p>
                    </div>
                    <div onClick={() => setShowInner(true)} style={{cursor:'pointer'}}>
                        <img src={wholeim} alt="Gluten-Free" style={{ width: '100%', borderRadius: '50%' }} />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Whole Spices</p>
                    </div>
                    <div onClick={() => setShowInner(true)} style={{cursor:'pointer'}}>
                        <img src={specialim} alt="Hot & Spicy" style={{ width: '100%', borderRadius: '50%' }} />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Special Spices</p>
                    </div>
                    <div onClick={() => setShowInner(true)} style={{cursor:'pointer'}}>
                        <img src={wholechillie} alt="New Arrivals" style={{ width: '100%', borderRadius: '50%' }} />
                        <p style={{ fontWeight: 'bold', marginTop: '20px' }}>Whole Chillies</p>
                    </div>
                    <div onClick={() => setShowInner(true)} style={{cursor:'pointer'}}>
                        <img src={powderim} alt="Original" style={{ width: '100%', borderRadius: '50%' }} />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Best Sellers</p>
                    </div>
                    <div onClick={() => setShowInner(true)} style={{cursor:'pointer'}}>
                        <img src={powderim} alt="Sweet Honey" style={{ width: '100%', borderRadius: '50%' }} />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>New Arrivals</p>
                    </div>
                </div>
            </section>

{showInner && <ProductListing />}
        </>
    )
}

export default Shop;