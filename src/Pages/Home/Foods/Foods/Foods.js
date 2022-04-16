import React from "react";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import FoodsNav from "../FoodsNav/FoodsNav";
import "./Foods.css";
import Lunch from "../Lunch/Lunch";
import { Outlet, useNavigate } from "react-router-dom";

const Foods = () => {
  const navigate = useNavigate();

  return (
    <div className="foodsContainer ">
      <FoodsNav></FoodsNav>
      <main className="outletContainer container">
        <Outlet></Outlet>
      </main>
      <div className="buttonContainer">
        <button onClick={() => navigate(`/checkout`)}>
          Checkout Your Food
        </button>
      </div>
    </div>
  );
};

export default Foods;
