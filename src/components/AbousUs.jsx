import '../../src/aboutus.css'
import Footer from './Footer';
import NavBar from './NavBar';
import owner from '../../src/assets/owner.jpg'
import direc from '../../src/assets/director.jpg'
import manag from '../../src/assets/manager.jpg'

function AboutUs () {
    return (
        <>
            <NavBar />

            <div className="about_heading">
                <div className="overlap"></div>
                <h1>About Us</h1>
            </div>

            <div className="about_info">
                <div className="brand_name"><h1><span style={{color: 'red' }}>M</span>etro <br /><span style={{color: 'red' }}>M</span>asala</h1></div>
                <div className="brand_info"><span style={{ fontSize: '2.5rem' }}>W</span>elcome to Metro Masala – your trusted partner in bringing authentic flavors to every kitchen since 1993. Based in the vibrant town of Palanpur, we are proud to be a family-owned business dedicated to delivering premium-quality spices and masalas that add a touch of tradition to your meals. For over three decades, Metro Masala has been committed to sourcing the finest ingredients, blending them with care, and preserving the rich heritage of Indian cuisine. Our journey began with a simple vision: to share the magic of pure, aromatic spices with households and chefs across the nation. Today, our products are cherished for their unmatched quality, authenticity, and consistency. At Metro Masala, we believe that great food starts with great spices. Whether you’re recreating age-old recipes or experimenting with new dishes, our wide range of masalas is crafted to infuse your cooking with unforgettable taste and aroma. Thank you for making us a part of your culinary journey. Let’s continue to spice up life, one dish at a time! <br />
                    <span style={{ fontWeight: 'bolder', }}><span style={{ fontSize: '2.5rem', color: 'red' }}>M</span>etro <span style={{ fontSize: '2.5rem', color: 'red' }}>M</span>asala – From Palanpur to Your Plate.</span></div>
            </div>

            <div className="people">
                <h1>Our Team</h1>
                <div className="people_info">
                    <div className="people_img">
                        <img src={owner} alt="owner" />
                        <h5>Abdullah Badarpuriya</h5>
                        <h5>Owner</h5>
                    </div>
                    <div className="people_img">
                        <img src={direc} alt="Director" />
                        <h5>Muhammed Badarpuriya</h5>
                        <h5>Director</h5>
                    </div>
                    <div className="people_img">
                        <img src={manag} alt="Manager" />
                        <h5>Ahmed Badarpuriya</h5>
                        <h5>Manager</h5>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AboutUs;