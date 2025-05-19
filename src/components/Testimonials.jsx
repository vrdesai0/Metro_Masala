import React, { useState } from "react";
import "../../src/TestimonialSlider.css";

const testimonials = [
  {
    text: `Until I found Herbs N Spices I was getting my spices shipped to me from across the country. But now, I can get a variety of fresh products from this amazing shop in no time at affordable pricing and very fast shipping.`,
    name: "Steve Smith",
    image: "/path-to-image.jpg", // Replace with actual image path
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptates dolorem consequuntur accusantium nam quod. Debitis aspernatur magnam quasi iste assumenda dolore iure,',
    name: "Steve Smith",
    image: "/path-to-image.jpg", // Replace with actual image path
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laborum nesciunt dolor quidem eveniet aliquam atque quaerat est minus suscipit! Modi labore, voluptate aut unde molestias exercitationem fuga dicta beatae, earum delectus, sequi laboriosam?',
    name: "Steve Smith",
    image: "/path-to-image.jpg", // Replace with actual image path
  },
  // Add more testimonials here if needed
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonial-container">
      <h2 className="heading">Hear From Our Clients</h2>
      <div className="testimonial-box">
        <button className="arrow left" onClick={prev}>←</button>

        <div className="testimonial-content">
          <p className="quote">“{testimonials[index].text}”</p>
          <h4>{testimonials[index].name}</h4>
          <img src={testimonials[index].image} alt={testimonials[index].name} />
        </div>

        <button className="arrow right" onClick={next}>→</button>
      </div>
    </div>
  );
};

export default Testimonials;
