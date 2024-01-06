import React, { useState } from "react";

export default function Textform(props) {
  const [textarea, setTextarea] = useState("");
  const changeHandler = (event) => {
    setTextarea(event.target.value);
  };

  const clickToUpperCase = () => {
    let newText = textarea.toUpperCase();
    setTextarea(newText);
    props.showAlert("converted into uppercase", "success");
  };

  const clickToLowerCase = () => {
    setTextarea(textarea.toLowerCase());
    props.showAlert("converted into lowercase", "success");
  };

  const clickToCopy = () => {
    const newText = document.getElementById("box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("text has been copied successfully", "success");
  };

  const clickToClear = () => {
    setTextarea("");
  };

  return (
    <>
      <div
        className="mb-3 container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> {props.heading} </h1>
        <textarea
          className="form-control "
          style={{
            backgroundColor: props.mode === "dark" ? props.color : "white",
            color: props.mode === "dark" ? "white" : "black",
            cursor: "text",
          }}
          id="box"
          rows="9"
          placeholder="Enter Text Here"
          value={textarea}
          onChange={changeHandler}
        ></textarea>
      </div>
      <div className="container">
        <button className="btn btn-primary " onClick={clickToUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-4" onClick={clickToLowerCase}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-2" onClick={clickToCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={clickToClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <p>
          {
            textarea.split(/\s/).filter((word) => {
              return word.length !== 0;
            }).length
          }
          words,
          {textarea.trim().length} charecters
        </p>
      </div>
    </>
  );
}
