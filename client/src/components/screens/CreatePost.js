import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const history = useHistory();

  //this effect will wait untill the url is finished
  useEffect(() => {
    //to prevent execution when the component mount
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          //jwt and user are stored in local storage
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({ html: data.error });
          } else {
            M.toast({ html: "Post Created Successfully" });
            history.push("/");
          }
        })
        .catch((error) => {
          M.toast({ html: error });
        });
    }
  }, [url]);

  const postDetails = () => {
    //to upload file use formData
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "souravcloud");
    fetch("https://api.cloudinary.com/v1_1/souravcloud/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-filed"
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <div className="file-field input-field">
        <div className="btn blue darken-1">
          <span>Upload Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>

      <button
        className="btn waves-effect waves-light blue darken-1"
        onClick={() => postDetails()}
      >
        Submit
      </button>
    </div>
  );
}

export default CreatePost;
