import React from "react";
import logo1 from "../../../images/logo2.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="bannerImg">
      <div className="bannerContent">
        <div className="formContainer">
          <img className="formLogo" src={logo1} alt="" />
          <div className="inputs">
            <form action="">
              <input placeholder="Name" type="text" name="name" id="name" />
              <input placeholder="Email" type="email" name="email" id="email" />
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />
              <input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
              <input className="submitButton" type="submit" value="SignUp" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
