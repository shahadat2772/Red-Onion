import React from "react";
import "./EachBreakfast.css";

const EachBreakfast = ({ meal }) => {
  const addToCart = (meal) => {
    console.log(meal);
  };

  const { img, name, price } = meal;
  return (
    <div onClick={() => addToCart(meal)} className="eachMealContainer mx-auto">
      <div className="img text-center">
        <img src={img} alt="" />
      </div>
      <p className="mealName">{name}</p>
      <p className="mealDes">How we dream about our future</p>
      <p className="mealPrice">${price}</p>
    </div>
  );
};

export default EachBreakfast;
