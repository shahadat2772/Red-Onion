import React, { useContext } from "react";
import { CartContext } from "../../Home/Home";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>You have selected: {cart.length}</h2>
    </div>
  );
};

export default Cart;
