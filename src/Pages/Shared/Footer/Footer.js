import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer className="footer container">
        <div className="upperFooter">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menusFirst">
            <p>About online food</p>
            <p>Read our blog</p>
            <p>Sign UP to deiliver</p>
            <p>Add your resturent</p>
          </div>
          <div className="menusSecond">
            <p>About online food</p>
            <p>Read our blog</p>
            <p>Sign UP to deiliver</p>
            <p>Add your resturent</p>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="copyRightText">
            <small>Copyright @ 2020 Online food</small>
          </div>
          <div className="otherLinks">
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Pricing</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
