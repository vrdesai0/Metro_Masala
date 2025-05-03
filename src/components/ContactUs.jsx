import React from "react";
import "../ContactUs.css";
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const ContactUs = () => {


  useEffect(() => {
      AOS.init({ duration: 200 });
    }, []);

  return (
    <div id="contact" className="contact-container" data-aos="fade-up2" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-offset="10">
      <h2>
        <span>CONTACT US</span>
      </h2>
      <hr className="divider" />

      <form className="contact-form">
        <input type="text" placeholder="Write your full name here..." />
        <input type="email" placeholder="Write your email address here..." />
        <textarea rows="5" placeholder="Write your message here..." />
        <button type="submit">SEND YOUR MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactUs;
