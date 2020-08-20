import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./screen.css";
import M from "materialize-css";

function SignIn() {
  const [password, setPasswod] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const postData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email" });
      return;
    }
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error });
        } else {
          M.toast({ html: "signed in successfully" });
          history.push("/");
        }
      })
      .catch((error) => {
        M.toast({ html: error });
      });
  };
  return (
    <div className="login-card">
      <div className="card auth-card">
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPasswod(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light"
          onClick={() => {
            postData();
          }}
        >
          Login
        </button>
        <div className="already_accout">
          <Link to="/signup">New to Instagram?</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
