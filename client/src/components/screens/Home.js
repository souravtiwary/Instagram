import React from "react";
import "./screen.css";

function Home() {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Sourav</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1583854710609-d8d2790e4105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>This is post paragraph</p>
          <input type="text" placeholder="add comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Sourav</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1583854710609-d8d2790e4105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>This is post paragraph</p>
          <input type="text" placeholder="add comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Sourav</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1583854710609-d8d2790e4105?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>This is post paragraph</p>
          <input type="text" placeholder="add comment" />
        </div>
      </div>
    </div>
  );
}

export default Home;
