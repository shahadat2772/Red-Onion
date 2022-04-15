import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerImg">
      <div className="bannerContent">
        <h1 className="text-dark mb-3">Best food waiting for your belly</h1>
        <div className="holder">
          <input
            placeholder="Search food item"
            type="text"
            name="search"
            id="search"
          />
          <button className="searchBtn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
