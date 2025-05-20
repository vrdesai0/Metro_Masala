import im1 from '../assets/bg1.jpg'
import im2 from '../assets/bg2.jpg'
import im3 from '../assets/bg3.jpg'
import im4 from '../assets/bg4.jpg'
import im5 from '../assets/bg5.jpg'
import CategoryCards from './CategoryCards'
import FoodCategoryCards from './FoodCategoryCards'
import Footer from './Footer'
import HomePage from './HomePage'
import NavBar from './NavBar'
import OfferContainer from './OfferContainer'
import Products from './Products'
import Product_category from './products_category'
import Testimonials from './Testimonials'

function LandingPage() {
    return (
        <>
        <NavBar />
            <div className="slider" id='landing'>
                <div className="slide active">
                    <img src={im1} className="active" />

                    <div className="sltext sltext1">
                        <p>Add Flavor to Life with Metro Masala – Spice It Up!</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={im2} />

                    <div className="sltext sltext2">
                        <p>A Dash of Tradition, a Pinch of Perfection – Pure Spices, Pure Joy!</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={im3} />

                    <div className="sltext sltext3">
                        <p>Crafting Culinary Magic – One Spice at a Time with Metro Masala!</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={im4} />

                    <div className="sltext sltext4">
                        <p>Turn Ordinary Meals into Masterpieces with Our Spices!</p>
                    </div>
                </div>
                <div className="slide ">
                    <img src={im5} />

                    <div className="sltext sltext5">
                        <p>Metro Masala – Unleash the Chef in You!</p>
                    </div>
                </div>
            </div>

            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className='svgim' width="100%" style={{ marginTop: '-280px', position: 'absolute' }}>
                <path fill="#F8EEE7" d="M0,120 C360,600 1000,-100 1440,200 L1440,320 L0,320 Z"></path>
            </svg>

      <HomePage />
      <FoodCategoryCards />
      <Product_category />
      <CategoryCards />
      <OfferContainer />
      <Products />
      <Testimonials />
      <Footer />



        </>
    )
}

export default LandingPage;