import sm1 from '../assets/small1.png'
import sm2 from '../assets/small2.png'
import sm3 from '../assets/small3.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CategoryCards() {
    const data = [
                {
                  title: 'Ground Spice',
                  desc: 'Get fully ground & powdered spices ready to be added to any dish on the go',
                  bg: '#F3C665',
                  img: sm1, // Replace with actual path
                },
                {
                  title: 'Whole Spices',
                  desc: 'Find a wide variety of fresh whole spices that add dynamic & delicious flavors',
                  bg: '#D95F7B',
                  img: sm2,
                },
                {
                  title: 'Dry Fruits',
                  desc: 'Explore our collection of specially imported dry fruits from different countries they\'re famous for.',
                  bg: '#36855E',
                  img: sm3,
                },
              ];

              useEffect(() => {
                  AOS.init({ duration: 200 });
                }, []);
              
      

  
    return (
      <div className="category-container" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10">
        {data.map((item, i) => (
          <div className="category-card"  data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-in-out" data-aos-offset="10" key={i}>
            <div
              className="circle-img" 
              style={{ backgroundColor: item.bg }}
            >
              <img src={item.img} alt={item.title} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default CategoryCards;
  