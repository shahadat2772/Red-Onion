import React from "react";

const EachDinner = ({ meal }) => {
  const { img, name, price } = meal;
  return (
    <div className="eachMealContainer mx-auto">
      <div className="img text-center">
        <img src={img} alt="" />
      </div>
      <p className="mealName">{name}</p>
      <p className="mealDes">How we dream about our future</p>
      <p className="mealPrice">${price}</p>
    </div>
  );
};

export default EachDinner;
