import React, { createContext, useState } from "react";
import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods/Foods";

export const CartContext = createContext();

const Home = () => {
  // Cart
  const [cart, setCart] = useState([]);
  console.log(cart);
  // Handle add to cart
  const handleAddToCart = (selectedMeal) => {
    const exists = cart.find((meal) => meal.id === selectedMeal.id);
    if (exists) {
      exists.quantity = exists.quantity + 1;
      const rest = cart.filter((meal) => meal.id !== exists.id);
      setCart([...rest, exists]);
    } else {
      selectedMeal["quantity"] = 1;
      setCart([...cart, selectedMeal]);
    }
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, handleAddToCart }}>
        <Banner></Banner>
        <Foods></Foods>
      </CartContext.Provider>
    </div>
  );
};

export default Home;
