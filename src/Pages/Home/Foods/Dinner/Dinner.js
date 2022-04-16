import React from "react";

import dinner1 from "../../../../images/dinner/dinner1.png";
import dinner2 from "../../../../images/dinner/dinner2.png";
import dinner3 from "../../../../images/dinner/dinner3.png";
import dinner4 from "../../../../images/dinner/dinner4.png";
import dinner5 from "../../../../images/dinner/dinner5.png";
import dinner6 from "../../../../images/dinner/dinner6.png";
import EachDinner from "../EachDinner/EachDinner";

const dinnerItems = [
  {
    id: 1,
    name: "Salmon with Grapefruit and Lenti Salad",
    img: dinner1,
    price: 23.99,
  },
  { id: "dinner2", name: "Lemony Salmon Piccata", img: dinner2, price: 9.99 },
  { id: "dinner3", name: "Pork Denerlion With", img: dinner3, price: 6.99 },
  { id: "dinner4", name: "French Fries", img: dinner4, price: 8.99 },
  {
    id: "dinner5",
    name: "Garlic Butter Baked Salmon",
    img: dinner5,
    price: 15.99,
  },
  { id: "dinner6", name: "Backed Chiken", img: dinner6, price: 7.99 },
];

const Dinner = () => {
  return (
    <div className="foodContainer">
      {dinnerItems.map((dinner) => (
        <EachDinner key={dinner.id} meal={dinner}></EachDinner>
      ))}
    </div>
  );
};

export default Dinner;
