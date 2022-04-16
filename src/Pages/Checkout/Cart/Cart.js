import React, { createContext, useState } from "react";

export const handleAddToCart = createContext();

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = ({ meal }) => {
    setCart([...cart, meal]);
  };

  console.log(cart);

  return <div></div>;
};

export default Cart;
