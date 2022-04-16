import React, { useContext } from "react";
import { CartContext } from "../../Home/Home";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  let quantity = 0;
  let subtotal = 0;

  for (const meal of cart) {
    subtotal += meal.price * meal.quantity;
    quantity += meal.quantity;
  }

  const tax = subtotal && subtotal * 0.1;
  const deliveryFee = cart.length ? cart.length : 0;
  const grandTotal = subtotal && subtotal + deliveryFee + tax;

  return (
    <div className="cartContainer">
      <div className="ItemsContainer">
        {cart.map((meal) => (
          <CartItem meal={meal}></CartItem>
        ))}
      </div>
      <div className="cartInfo">
        <div className="cartDetails subtotal">
          <p>Subtotal * {quantity} item </p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="cartDetails tax">
          <p>Tax</p> <p>${tax.toFixed(2)}</p>
        </div>
        <div className="cartDetails delivery">
          <p>Delivery fee </p> <p>${deliveryFee}</p>
        </div>
        <div className="cartDetails total">
          <p>Total </p> <p>${grandTotal.toFixed(2)}</p>
        </div>
      </div>
      <button className="orderBtn">Place Order</button>
    </div>
  );
};

export default Cart;
