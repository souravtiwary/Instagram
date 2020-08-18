import React from "react";
import "./screen.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="login-card">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button className="btn waves-effect waves-light">Login</button>
        <div className="already_accout">
          <Link to="/signup">New to Instagram?</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
