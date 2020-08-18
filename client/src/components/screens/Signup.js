import React from "react";
import { Link } from "react-router-dom";
import "./screen.css";

function Signup() {
  return (
    <div className="login-card">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="password" />
        <button className="btn waves-effect waves-light">SignUp</button>
        <div className="already_accout">
          <Link to="/signin">Already Have Account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
