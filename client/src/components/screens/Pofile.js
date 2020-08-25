import React, { useEffect, useState, useContext } from "react";
import "./screen.css";
import { UserContext } from "../../App";
function Pofile() {
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.mypost);
      });
  }, []);
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            className="profileimage"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "80px",
            }}
            src="https://images.unsplash.com/photo-1495366691023-cc4eadcc2d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
          />
        </div>
        <div>
          <h4>{state ? state.name : "Loading"}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "109%",
            }}
          >
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {data.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pofile;
