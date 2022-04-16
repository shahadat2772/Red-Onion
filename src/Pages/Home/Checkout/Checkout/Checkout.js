import React from "react";
import Cart from "../Cart/Cart";
import Shipping from "../Shipping/Shipping";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkoutContainer">
      <div className="shippingContainer">
        <Shipping></Shipping>
      </div>
      <div className="cartContainer">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Checkout;
