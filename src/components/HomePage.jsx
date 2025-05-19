import whole from '../assets/WholeSpices.png'
import ground from '../assets/groundSpices.jpg'
import back from '../assets/extra_back3.jpg'
import back2 from '../assets/extra_back2.jpg'
// import { useEffect, useState } from 'react';
import CategoryCards from './CategoryCards';
import React, { useEffect, useRef, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';




const Stat = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = () => {
            start += value / 400;
            if (start < value) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          step();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat">
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <p className="stat-label">{label}</p>
    </div>
  );
};





function HomePage() {




    const [currentSection, setCurrentSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 2100) {
                setCurrentSection(1);

            } else if (scrollY < 3800) {
                setCurrentSection(2);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        AOS.init({ duration: 200 });
    }, []);








    return (
        <>
            <div className="about" id='about'>
                <p data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10">About Us</p>
                <p data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10" data-aos-delay="500">Metro Masala</p>
                <p data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10" data-aos-delay="800">
                    <span style={{ fontSize: '2.5rem' }}>W</span>elcome to Metro Masala – your trusted partner in bringing authentic flavors to every kitchen since 1993. Based in the vibrant town of Palanpur, we are proud to be a family-owned business dedicated to delivering premium-quality spices and masalas that add a touch of tradition to your meals. For over three decades, Metro Masala has been committed to sourcing the finest ingredients, blending them with care, and preserving the rich heritage of Indian cuisine. Our journey began with a simple vision: to share the magic of pure, aromatic spices with households and chefs across the nation. Today, our products are cherished for their unmatched quality, authenticity, and consistency. At Metro Masala, we believe that great food starts with great spices. Whether you’re recreating age-old recipes or experimenting with new dishes, our wide range of masalas is crafted to infuse your cooking with unforgettable taste and aroma. Thank you for making us a part of your culinary journey. Let’s continue to spice up life, one dish at a time! <br />
                    <span style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '2.5rem', color: 'red' }}>M</span>etro <span style={{ fontSize: '2.5rem', color: 'red' }}>M</span>asala – From Palanpur to Your Plate.</span></p>
            </div>

            <div className="stats-container">
                <Stat value={1000} suffix="+" label="Happy Customers" />
                <Stat value={5450} suffix="+" label="Bottles Sold" />
                <Stat value={100} suffix="%" label="Natural Ingredients" />
                <Stat value={10} suffix="Years" label="Experience" />
            </div>





            {/* <div classNameNameName='marq'>
                <div classNameNameName="marquee-container">
                    <div classNameNameName="marquee">
                        <div classNameNameName="track">
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                            <span>No Additives, No Preservatives – Just Pure Flavor from Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* 
            <div classNameNameName='marq marq2'>
                <div classNameNameName="marquee-container">
                    <div classNameNameName="marquee2">
                        <div classNameNameName="track">
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                            <span>No Additives, No Preservatives – Just Pure Flavor from Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Fresh. Pure. Authentic. Taste the Tradition with Metro Masala! &nbsp;&nbsp;&nbsp;</span>
                            <span>Spice Up Every Meal with Metro Masala – Whole & Ground Spices You Can Trust! &nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div classNameNameName="back1">
                <img src={back} classNameNameName='back1_img' style={{
                    opacity: currentSection === 1 ? 1 : 0,
                    
                }} alt="" />
            </div> */}

            {/* <div classNameNameName='details'>
                <div classNameNameName="details_container">
                    <div classNameNameName="content">
                        <h1 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10" data-aos-delay="800">Whole Spices-Nature’s Aromatic Treasure</h1>
                        <div classNameNameName="details_image_res" data-aos="fade-up2" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-offset="10">
                            <img src={whole} alt="" />
                        </div>
                        <p>Whole spices are the backbone of Indian cooking — rich in flavor, aroma, and tradition. Whole spices are the purest form of flavor, carrying the natural aroma and richness of the land they come from. Metro Masala brings you a premium range of whole spices, carefully sourced from the best farms across India. These spices are handpicked, sun-dried, and hygienically packed to retain their natural oils, taste, and freshness. Metro Masala’s whole spices include cumin seeds, cardamom, cloves, black peppercorns, cinnamon sticks, bay leaves, mustard seeds, and fennel seeds. Each spice is free from preservatives, additives, or artificial colors — 100% natural and authentic. Whether you're preparing traditional Indian dishes, making homemade spice blends, or infusing teas and pickles, Metro Masala’s whole spices elevate every recipe with bold, aromatic notes.</p>
                    </div>
                    <div classNameNameName="details_image">
                        <img src={whole} classNameNameName='zoomAnimation' alt="" />
                    </div>
                </div>

                <div classNameNameName="details_container">
                    <div classNameNameName="details_image im2">
                        <img src={ground} classNameNameName='zoomAnimation'  alt="" />
                    </div>
                    <div classNameNameName="content cn2 ">
                        <h1 data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10" data-aos-delay="800">Ground Spices – Pure, Potent, and Packed with Flavor</h1>
                        <div classNameNameName="details_image_res"  data-aos="fade-up2" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-offset="10">
                            <img src={ground} classNameNameName='zoomAnimation'  alt="" />
                        </div>
                        <p>Metro Masala offers a finely curated collection of ground spices that bring convenience without compromising on authenticity. Made from high-quality whole spices, each powder is ground in small batches to preserve its natural color, aroma, and taste. Metro Masala’s ground spices include turmeric powder, red chili powder, coriander powder, cumin powder, garam masala, and more. These powders are 100% pure, with no artificial colors, fillers, or preservatives — just rich, flavorful spice in every spoonful. Perfect for quick cooking and everyday use, Metro Masala ground spices blend effortlessly into curries, vegetables, snacks, and gravies, delivering consistent taste and vibrant color. For homes that value real ingredients and bold flavors, Metro Masala is the trusted choice.</p>
                    </div>

                </div>
            </div> */}

            {/* <div classNameNameName="back1">
                <CategoryCards />
                
                <img src={back2} classNameNameName='back1_img' alt="" style={{
                    opacity: currentSection === 2 ? 1 : 0,
                    
                }} />
            </div> */}

        </>
    )


}

export default HomePage;

