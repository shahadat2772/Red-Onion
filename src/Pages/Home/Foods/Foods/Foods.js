import React from "react";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import FoodsNav from "../FoodsNav/FoodsNav";
import "./Foods.css";
import Lunch from "../Lunch/Lunch";
import { Outlet } from "react-router-dom";

const Foods = () => {
  return (
    <div className="foodsContainer ">
      <FoodsNav></FoodsNav>
      <main className="outletContainer container">
        <Outlet></Outlet>
      </main>
      <div className="buttonContainer">
        <button>Checkout Your Food</button>
      </div>
    </div>
  );
};

export default Foods;
