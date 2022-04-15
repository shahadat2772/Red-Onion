import React from "react";

import lunch1 from "../../../../images/lunch/lunch1.png";
import lunch2 from "../../../../images/lunch/lunch2.png";
import lunch3 from "../../../../images/lunch/lunch3.png";
import lunch4 from "../../../../images/lunch/lunch4.png";
import lunch5 from "../../../../images/lunch/lunch5.png";
import lunch6 from "../../../../images/lunch/lunch6.png";
import EachLunch from "../EachLunch/EachLunch";

const lunchItems = [
  { id: 1, name: "Healthy Meal Plan", img: lunch1, price: 23.99 },
  { id: 2, name: "Fried Chicken Bento", img: lunch2, price: 9.99 },
  { id: 3, name: "Tarragon-Rubbed-Salmon", img: lunch3, price: 6.99 },
  { id: 4, name: "Indian Lunch", img: lunch4, price: 8.99 },
  { id: 5, name: "Beef Steak", img: lunch5, price: 15.99 },
  { id: 6, name: "Honey-Soy-Glazed-Salmon", img: lunch6, price: 7.99 },
];

const Lunch = () => {
  return (
    <div className="foodContainer">
      {lunchItems.map((lunch) => (
        <EachLunch key={lunch.id} meal={lunch}></EachLunch>
      ))}
    </div>
  );
};

export default Lunch;
