import React from "react";
import "./EachBreakfast.css";

const EachBreakfast = ({ meal }) => {
  const { img, name, price } = meal;
  return (
    <div className="eachMealContainer mx-auto">
      <img src={img} alt="" />
      <p className="mealName">{name}</p>
      <p className="mealDes">How we dream about our future</p>
      <p className="mealPrice">${price}</p>
    </div>
  );
};

export default EachBreakfast;
