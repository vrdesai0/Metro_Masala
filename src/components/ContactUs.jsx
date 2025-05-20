import "../ContactUs.css";
import 'aos/dist/aos.css';
import NavBar from "./NavBar";
import Footer from "./Footer";

const ContactUs = () => {


  return (
    <>
      <NavBar />

      <div className="about_heading">
        <div className="overlap"></div>
        <h1>Contact Us</h1>
      </div>

      <div className="bod">
        <div className="contact-container">
          <div className="contact-item">
            <div className="circle yellow"></div>
            <div>
              <h3>Address</h3>
              <p>Washington State Convention <br />Center 705 Pike Street.</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="circle red"></div>
            <div>
              <h3>Email Address</h3>
              <p>Contact@appmart.com<br />Contact2@appmart.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="circle green"></div>
            <div>
              <h3>Phone</h3>
              <p>+88177888 xxxxxxxx<br />+88177888 xxxxxxxx</p>
            </div>
          </div>
        </div>


        <div className="form-container">
          <h2>Have Questions? Get In Touch!</h2>
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
          </form>
          <button className="sb_btn">Submit</button>
        </div>

        <div style={{ width: "100%", height: "400px", marginTop: "40px"}}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.52219741612!2d72.9221563!3d21.7682161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f893b568ef17d%3A0xa8855dd591f2677c!2sMetro%20Masala%20Mill!5e0!3m2!1sen!2sin!4v1716129382957!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default ContactUs;
