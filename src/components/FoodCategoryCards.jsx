import React from "react";
import foodim1 from "../assets/foodcat1.webp"
import foodim2 from "../assets/foodcat2.webp"
import foodim3 from "../assets/foodcat3.jpg"
import "../FoodCategoryCards.css";

const FoodCategoryCards = () => {
  return (
    <div className="category-wrapper2">
      <div className="category-card2">
        <div className="image-container2">
          <img src={foodim1} alt="Hot & Spicy" />
        </div>
        <div className="category-text2">
          <h2>Hot & Spicy Masala</h2>
          <p>Purely Grinded</p>
        </div>
      </div>

      <div className="category-card2">
        <div className="image-container2">
          <img src={foodim3} alt="Sweet Honey" />
        </div>
        <div className="category-text2">
          <h2>Vegetable Masala</h2>
          <p>Sale Off 30%</p>
        </div>
      </div>

      <div className="category-card2">
        <div className="image-container2">
          <img src={foodim2} alt="BBQ & Grilling" />
        </div>
        <div className="category-text2">
          <h2>BBQ & Grilling Masala</h2>
          <p>Sale Off 30%</p>
        </div>
      </div>
    </div>


  );
};

export default FoodCategoryCards;
