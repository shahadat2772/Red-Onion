import { async } from "@firebase/util";
import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import logo1 from "../../../images/logo2.png";
import Loading from "../../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Naivgate
  const navigate = useNavigate();

  // Sign in hook
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email, password);
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
          <Link className="formToggleBtn" to={`/signup`}>
            Don't have an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
