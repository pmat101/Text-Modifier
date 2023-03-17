import { useState } from "react";
let textColour;
let str = "";

export default function Main(props) {
  if (props.mode === "light") textColour = "dark";
  else textColour = "light";
  function handleChange(e) {
    output(e.target.value);
  }
  const [input, output] = useState(""); // State management
  function dummy() {
    str =
      str +
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum aspernatur porro blanditiis vel, distinctio impedit. Voluptatum cum consectetur officiis velit quisquam dolorum provident aliquid corporis, reprehenderit animi. Corrupti, hic. \n";
    output(str);
  }
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
    console.log(arr);
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === "") arr.splice(i, 1);
      else i++;
    }
    let trimmer = arr.join(" ");
    output(trimmer);
  }
  function copy() {
    navigator.clipboard.writeText(input);
  }
  function clText() {
    str = "";
    output(str);
  }
  return (
    <div className="container" style={{ height: "82vh" }}>
      <h2 className="my-5">
        Welcome to the Text Modifier app *Made using Bootstrap and ReactJS*
      </h2>
      <div className="form-floating">
        <textarea
          className={`form-control bg-${props.mode} text-${textColour}`}
          placeholder="Leave a comment here"
          id="floatingTextarea"
          style={{ height: "41vh" }}
          value={input} // Initial value of state
          onChange={handleChange} // Allows user to type even after button click
        ></textarea>
        <label htmlFor="floatingTextarea">Enter your text here:</label>
        <button className="btn btn-primary m-2" onClick={dummy}>
          Generate random text
        </button>
        <button className={`btn btn-${textColour} m-2`} onClick={doUp}>
          Make Uppercase
        </button>
        <button className={`btn btn-${textColour} m-2`} onClick={doLow}>
          Make Lowercase
        </button>
        <button className={`btn btn-${textColour} m-2`} onClick={trim}>
          Trim text
        </button>
        <button className="btn btn-success m-2" onClick={copy}>
          Copy Text
        </button>
        <button className="btn btn-danger m-2" onClick={clText}>
          Clear Text
        </button>
      </div>
      <p className="py-4">
        This text has {input.trim().length} characters and{" "}
        {input.trim().split.length} words.
      </p>
    </div>
  );
}
