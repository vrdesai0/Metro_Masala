import pr1 from '../assets/haldi.avif'
import pr2 from '../assets/kashmiri.avif'
import pr3 from '../assets/dhanajeera.jpg'
import pr4 from '../assets/kumthi.avif'
import pr5 from '../assets/dalgosht.jpg'
import pr6 from '../assets/pavbhaji.jpg'
import pr7 from '../assets/cha.jpg'
import pr1_h from '../assets/cr_2.jpg'
import pr2_h from '../assets/cr_1.jpg'
import pr3_h from '../assets/cr_3.jpg'
import pr4_h from '../assets/cr_5.jpg'
import pr5_h from '../assets/cr_8.jpg'
import pr6_h from '../assets/cr_6.jpg'
import { useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
};


function Products() {

    

    // State for each individual image box
    const [hoverImage1, setHoverImage1] = useState(pr1);
    const [hoverImage2, setHoverImage2] = useState(pr2);
    const [hoverImage3, setHoverImage3] = useState(pr3);
    const [hoverImage4, setHoverImage4] = useState(pr4);
    const [hoverImage5, setHoverImage5] = useState(pr5);
    const [hoverImage6, setHoverImage6] = useState(pr6);
    const [hoverImage7, setHoverImage7] = useState(pr7);

    const handleHover = (setHoverImage, newImage) => {
        setHoverImage(newImage);
    };

    return (
        <>
            <div className="products" id='products'>
                <h1 style={{ borderTop: '1px solid black', borderBottom: '1px solid black', marginBottom: '40px' }}>Ground Spices</h1>

                <Slider {...settings} className='box'>

                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage1, pr1_h)}
                        onMouseLeave={() => handleHover(setHoverImage1, pr1)}>
                        <img src={hoverImage1} alt="" />
                        <div className="content_box">
                            <h2>Turmeric Powder</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>

                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage2, pr2_h)}
                        onMouseLeave={() => handleHover(setHoverImage2, pr2)}>
                        <img src={hoverImage2} alt="" />
                        <div className="content_box">
                            <h2>Kashmiri Laal Mirch</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>

                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage3, pr3_h)}
                        onMouseLeave={() => handleHover(setHoverImage3, pr3)}>
                        <img src={hoverImage3} alt="" />
                        <div className="content_box">
                            <h2>Dhaniya Powder</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>

                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage5, pr4_h)}
                        onMouseLeave={() => handleHover(setHoverImage5, pr5)}>
                        <img src={hoverImage5} alt="" />
                        <div className="content_box">
                            <h2>Dal Gosht Masala</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>

                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage4, pr2_h)}
                        onMouseLeave={() => handleHover(setHoverImage4, pr4)}>
                        <img src={hoverImage4} alt="" />
                        <div className="content_box">
                            <h2>Kumthi Mirch Powder</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>


                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage6, pr5_h)}
                        onMouseLeave={() => handleHover(setHoverImage6, pr6)}>
                        <img src={hoverImage6} alt="" />
                        <div className="content_box">
                            <h2>Chicken Masala</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>

                    <div className="image_box"
                        onMouseEnter={() => handleHover(setHoverImage7, pr6_h)}
                        onMouseLeave={() => handleHover(setHoverImage7, pr7)}>
                        <img src={hoverImage7} alt="" />
                        <div className="content_box">
                            <h2>Biryani Masala</h2>
                            <p>$50.00/100gm</p>
                        </div>
                    </div>

                </Slider>
            </div>


            
        </>
    );
}

export default Products;
