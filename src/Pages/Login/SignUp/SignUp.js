import React, { useState } from "react";
import logo1 from "../../../images/logo2.png";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { async } from "@firebase/util";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  // Create user with email and password hook
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // SignUP error
  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignUpError("Password did not matched!");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    navigate(`/`);
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
              <p className="mb-0 my-1">{signUpError && signUpError}</p>
              <input className="submitButton" type="submit" value="SignUp" />
            </form>
          </div>
          <Link className="formToggleBtn" to={`/login`}>
            Already have an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
