import React from "react";
import "./Breakfast.css";

import breakfast1 from "../../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../../images/breakfast/breakfast6.png";

import EachBreakfast from "../EachBreakfast/EachBreakfast";

const breakfastItems = [
  {
    id: "breakfast1",
    name: "Bagel and cream chees",
    img: breakfast1,
    price: 23.99,
  },
  {
    id: "breakfast2",
    name: "Breakfast sandwich",
    img: breakfast2,
    price: 9.99,
  },
  { id: "breakfast3", name: "Baked Chicken", img: breakfast3, price: 6.99 },
  { id: "breakfast4", name: "Eggs Benedict", img: breakfast4, price: 8.99 },
  {
    id: "breakfast5",
    name: "Toast Croissant Fried egg",
    img: breakfast5,
    price: 15.99,
  },
  {
    id: 6,
    name: "Full breakfast Fried egg Toast",
    img: breakfast6,
    price: 7.99,
  },
];

const Breakfast = () => {
  return (
    <div className="foodContainer">
      {breakfastItems.map((breakfast) => (
        <EachBreakfast key={breakfast.id} meal={breakfast}></EachBreakfast>
      ))}
    </div>
  );
};

export default Breakfast;
