import React from "react";

function CreatePost() {
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
      <div className="file-field input-field">
        <div className="btn blue darken-1">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />

      <button className="btn waves-effect waves-light blue darken-1">
        Submit
      </button>
    </div>
  );
}

export default CreatePost;
