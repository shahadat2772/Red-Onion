import React, { useContext } from "react";
import "./EachBreakfast.css";
import { CartContext } from "../../Home/Home";

const EachBreakfast = ({ meal }) => {
  const { cart, setCart, handleAddToCart } = useContext(CartContext);

  const { img, name, price } = meal;
  return (
    <div
      onClick={() => handleAddToCart(meal)}
      className="eachMealContainer mx-auto"
    >
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
