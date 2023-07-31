import React from "react";
import "../style/signin.css";
import { Link } from "react-router-dom";
import image from "../assets/1.jpg";
const SignIn = () => {
  return (
    <div className="container">
    <div className="signin-main" style={{overflow:'hidden'}}>
      <div className="signin">
        <img src={image} alt="" className="img-signin" />

        <div className="nav">
          <p className="id">NETFLIX</p>
       <Link to={'/home'} style={{textDecoration:'none'}}>
            <button className="signin-btn">Sign In</button>
            </Link>
        </div>

        <div className="main-content">
          <span className="main-title">
            Unlimited movies, TV shows and more
          </span>
          <span>Watch anywhere. Cancel anytime.</span>
          <span>
            Ready to watch?
          </span>
          <Link to="/home" style={{textDecoration:'none'}}>
            <button className="main-btn">Get Started !!</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
