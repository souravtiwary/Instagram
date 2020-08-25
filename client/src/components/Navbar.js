import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import { UserContext } from "../App";
function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile">Profile</Link>
        </li>,
        <li>
          <Link to="/createpost">Post</Link>
        </li>,
        <li>
          <li>
            <button
              className="btn waves-effect waves-light"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/signin");
              }}
            >
              Logout
            </button>
          </li>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/signin">SignIn</Link>
        </li>,
        <li>
          <Link to="/signup">SignUp</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link
          to={state ? "/" : "/signin"}
          className="brand-logo"
          rel="stylesheet"
        >
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
