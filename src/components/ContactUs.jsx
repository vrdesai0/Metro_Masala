import React from "react";
import "../ContactUs.css";

const ContactUs = () => {
  return (
    <div id="contact" className="contact-container autoshowAnimation">
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
