import React, { useContext } from "react";
import "./CartItem.css";
import { CartContext } from "../../Home/Home";

const CartItem = ({ meal }) => {
  const { img, name, price, quantity, id } = meal;

  const { increaseItemQuantity, decreaseItemQuantity } =
    useContext(CartContext);

  console.log(increaseItemQuantity, decreaseItemQuantity);

  return (
    <div className="cartItemContainer d-flex">
      <img src={img} alt="" />
      <div className="itemInfo">
        <p className="itemName">
          {name.length > 10 ? name.slice(0, 10) : name}
        </p>
        <p className="itemPrice">${price}</p>
        <p className="deliveryFree">Delivery free</p>
      </div>
      <div className="itemQuantityButtonsContainer d-flex ms-auto align-items-center">
        <button onClick={() => decreaseItemQuantity(id)}>-</button>
        <p className="itemQuantityDisplay">{quantity}</p>
        <button onClick={() => increaseItemQuantity(id)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
