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

  const increaseItemQuantity = (id) => {
    const item = cart.find((meal) => meal.id === id);
    item.quantity += 1;
  };
  const decreaseItemQuantity = (id) => {
    const item = cart.find((meal) => meal.id === id);
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      const restItems = cart.filter((meal) => meal.id !== id);
      setCart([...restItems]);
    }
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          handleAddToCart,
          increaseItemQuantity,
          decreaseItemQuantity,
        }}
      >
        <Banner></Banner>
        <Foods></Foods>
      </CartContext.Provider>
    </div>
  );
};

export default Home;
