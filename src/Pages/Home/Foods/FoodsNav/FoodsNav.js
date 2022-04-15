import React from "react";
import { Link } from "react-router-dom";
import "./FoodsNav.css";

const FoodsNav = () => {
  return (
    <nav className="navContainer">
      <Link to={`breakfast`}>Breakfast</Link>
      <Link to={`lunch`}>Lunch</Link>
      <Link to={`dinner`}>Dinner</Link>
    </nav>
  );
};

export default FoodsNav;
