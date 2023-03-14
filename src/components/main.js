import { useState } from "react";
let textColour;

export default function Main(props) {
  if (props.mode === "light") textColour = "dark";
  else textColour = "light";
  function handleChange(e) {
    output(e.target.value);
  }
  const [input, output] = useState(""); // State management
  function doUp() {
    let up = input.toUpperCase();
    output(up); // Changing state, can't do it using assignment operator
  }
  function doLow() {
    let low = input.toLowerCase();
    output(low);
  }
  function trim() {
    let arr = input.split(" ");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "") {
        arr.splice(i, 1);
        i--;
      }
    }
    let trimmer = arr.join(" ");
    output(trimmer);
  }
  function clText() {
    let empty = "";
    output(empty);
  }
  return (
    <div className="container">
      <h2 className="my-5">
        Welcome to the Text Modifier app *Made using Bootstrap and ReactJS*
      </h2>
      <div className="form-floating">
        <textarea
          className={`form-control bg-${props.mode} text-${textColour}`}
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style={{ height: "330px" }}
          value={input} // Initial value of state
          onChange={handleChange} // Allows user to type even after button click
        ></textarea>
        <label htmlFor="floatingTextarea">Enter your text here:</label>
        <button className="btn btn-primary m-2" onClick={doUp}>
          Make Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={doLow}>
          Make Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={trim}>
          Trim text
        </button>
        <button className="btn btn-danger m-2" onClick={clText}>
          Clear Text
        </button>
      </div>
      <p className="py-3">
        {" "}
        This text has {input.trim().length} characters and{" "}
        {input.trim().split(" ").length} words.{" "}
      </p>
    </div>
  );
}
