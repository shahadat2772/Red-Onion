import React from "react";
import Cart from "../Cart/Cart";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkoutContainer">
      <div className="cartContainer">
        <Cart></Cart>
      </div>
      <div className="shippingFormContainer">
        <ShippingInfo></ShippingInfo>
      </div>
    </div>
  );
};

export default Checkout;
