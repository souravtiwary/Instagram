import React, { useState } from "react";
import "./screen.css";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const UnlikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>{item.postedBy.name}</h5>
            <div className="card-image">
              <img src={item.photo} alt="Some Error Occured" />
            </div>
            <div className="card-content">
              <i
                className="material-icons"
                //style={{ color: "blue" }}
                onClick={() => {
                  likePost(item._id);
                }}
              >
                thumb_up
              </i>
              <i
                className="material-icons"
                // style={{ color: "red" }}
                onClick={() => {
                  UnlikePost(item._id);
                }}
              >
                thumb_down
              </i>
              <h6>{item.likes.length} likes</h6>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="add comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
