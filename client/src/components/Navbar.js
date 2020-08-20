import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo" rel="stylesheet">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/createpost">Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
