import im1 from '../../src/assets/dalgosht.jpg'
import back2 from '../assets/extra_back3.jpg'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Product_category() {

        const [currentSection, setCurrentSection] = useState(1);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY < 1900) {
          setCurrentSection(1);
    
        } else if (scrollY < 3800) {
          setCurrentSection(2);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


     const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop'); // navigate to About component
  };
    

    return (
        <>
        
            <div className='marq'>
                <div className="marquee-container">
                    <div className="marquee">
                        <div className="track">
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                            <span>No Additives, No Preservatives – Just Pure Flavor from Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="spices-section2">
                <h2>Our Products</h2>
                <div className="spices-grid">
                    <div className="spice-card2">
                        <img src={im1} alt="Red Paprika" />
                        <h3>Red Paprika</h3>
                        <p><del>$45.00</del> <span>$25.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Saigon Cinnamon" />
                        <h3>Saigon Cinnamon</h3>
                        <p><del>$89.00</del> <span>$79.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Star Anise" />
                        <h3>Star Anise</h3>
                        <p><del>$35.00</del> <span>$24.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Cantanzaro Herbs" />
                        <h3>Cantanzaro Herbs</h3>
                        <p><del>$89.00</del> <span>$79.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Red Paprika" />
                        <h3>Red Paprika</h3>
                        <p><del>$45.00</del> <span>$25.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Saigon Cinnamon" />
                        <h3>Saigon Cinnamon</h3>
                        <p><del>$89.00</del> <span>$79.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Star Anise" />
                        <h3>Star Anise</h3>
                        <p><del>$35.00</del> <span>$24.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                    <div className="spice-card2">
                        <img src={im1} alt="Cantanzaro Herbs" />
                        <h3>Cantanzaro Herbs</h3>
                        <p><del>$89.00</del> <span>$79.00</span></p>
                        <button className='cart_btn p_btn'>Add to Cart</button>
                    </div>
                </div>
                <button onClick={handleClick} className='explore_btn p_btn'>Explore More</button>
            </section>


            <div className='marq marq2'>
                <div className="marquee-container">
                    <div className="marquee2">
                        <div className="track">
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                            <span>No Additives, No Preservatives – Just Pure Flavor from Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="back1">
                
                <img src={back2} className='back1_img' alt="" style={{
                    opacity: currentSection === 2 ? 1 : 0,
                    
                }} />
            </div>
        </>
    )
}

export default Product_category;