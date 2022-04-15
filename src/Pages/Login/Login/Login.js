import React from "react";
import logo1 from "../../../images/logo2.png";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
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

              <input className="submitButton" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
