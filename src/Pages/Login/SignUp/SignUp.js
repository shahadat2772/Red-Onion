import React from "react";
import logo1 from "../../../images/logo2.png";
import "./SignUp.css";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return;
    }
  };

  return (
    <div className="bannerImg">
      <div className="bannerContent">
        <div className="formContainer">
          <img className="formLogo" src={logo1} alt="" />
          <div className="inputs">
            <form onSubmit={handleSubmit} action="">
              <input
                required
                placeholder="Name"
                type="text"
                name="name"
                id="name"
              />
              <input
                required
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                required
              />
              <input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
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
