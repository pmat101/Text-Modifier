import { useState } from "react";
let textColour, count;
let str = "";
export default function Main(props) {
  if (props.mode === "light") textColour = "dark";
  else textColour = "light";
  function handleChange(e) {
    output(e.target.value);
  }
  const [input, output] = useState(""); // State management
  function dummy() {
    let nowords = parseInt(prompt("ENTER NUMBER OF WORDS: (max 999)"));
    if (nowords > 999) alert("SORRY, MAXIMUM 999 WORDS AT A TIME!");
    else {
      let newArr = litarr.slice(0, nowords);
      str = str + newArr.join(" ") + "\n";
      output(str);
    }
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
  let wordCount = input.trim().split(" ");
  if (wordCount[0] === "") count = 0;
  else count = wordCount.length;
  return (
    <div className="container" style={{ height: "82vh" }}>
      <h2 className="my-5">
        Welcome to the <span className="fw-bold fs-1"> Text Modifier </span> app
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
        <button
          type="button"
          className="btn btn-primary m-2"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          onClick={dummy}
        >
          Generate random text
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className={`btn btn-${textColour} m-2`} onClick={doUp}>
          Make Uppercase
        </button>
        <button className={`btn btn-${textColour} m-2`} onClick={doLow}>
          Make Lowercase
        </button>
        <button className={`btn btn-secondary m-2`} onClick={trim}>
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
        This text has {input.trim().length} characters and {count} words.
      </p>
    </div>
  );
}

const lit =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit tortor non nibh varius laoreet. Mauris a eros eu ligula aliquam iaculis ut fringilla dui. Quisque tempus sit amet nisi nec gravida. In sit amet diam ligula. Nullam risus nunc, hendrerit convallis neque quis, finibus facilisis tellus. Cras at fringilla mi. Duis non semper dui, eu varius dolor. Nulla in urna porta, dapibus magna nec, posuere lorem.\n Fusce venenatis neque metus, id eleifend enim rhoncus sed. Pellentesque non eros metus. Etiam ut tincidunt ligula. Aenean volutpat ipsum ac nisl tincidunt, vitae ultricies magna vehicula. Curabitur quis malesuada tortor. Curabitur posuere sapien ut ante elementum faucibus. Proin vitae tincidunt velit. Vivamus elementum eleifend risus at malesuada. Phasellus gravida fermentum tempus. Pellentesque auctor metus iaculis pretium cursus. Nunc vitae nulla ac quam dapibus dictum a venenatis libero. Mauris a hendrerit urna, eget finibus lacus. Nullam quis ipsum nunc. \n Donec ac nisl at erat finibus convallis. Quisque facilisis pretium dui eget semper. Ut vel velit nunc. Donec blandit ligula eu nibh ultricies, interdum hendrerit felis finibus. Praesent mattis nulla sit amet commodo elementum. Nam maximus, metus ac dictum sagittis, nisi neque suscipit neque, eu sollicitudin lacus massa a nisl. Nulla varius ullamcorper magna, sed pharetra leo facilisis in. Suspendisse ut aliquam nulla. Phasellus et suscipit leo. Proin sed ex sed velit lacinia tristique. Ut pellentesque feugiat velit, sit amet dictum ligula laoreet ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas non enim augue. Mauris facilisis diam venenatis lectus hendrerit interdum in at elit. Quisque laoreet convallis quam ut vulputate. Fusce ligula tortor, sagittis vel lacus non, bibendum facilisis nisl. \n Sed rhoncus malesuada finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nec suscipit magna, vel hendrerit sem. Mauris cursus orci vel velit porta, sed feugiat quam efficitur. Vestibulum a urna non enim ultricies dapibus vitae eu mi. Nunc auctor tortor quis faucibus hendrerit. Vestibulum malesuada felis justo, quis sagittis magna interdum quis. \n Fusce neque nibh, hendrerit auctor commodo nec, laoreet ac augue. Maecenas tincidunt fringilla nisl et elementum. Nunc pretium lacinia nunc sed rutrum. Aliquam malesuada, nisl eget venenatis placerat, est velit fermentum erat, commodo fringilla mauris sapien nec ante. Donec placerat consequat urna, non aliquam tellus sollicitudin quis. Phasellus et ex et massa efficitur molestie a non sapien. Donec in dui magna. \n Vivamus luctus, tortor in sagittis ornare, lectus erat iaculis metus, eget fringilla nisi nisi id arcu. Vivamus quis lectus dapibus, lacinia velit varius, condimentum nisl. Vivamus mollis eros a orci pellentesque, eget sollicitudin urna dictum. Morbi efficitur, nisi vel cursus finibus, urna orci vulputate mauris, lobortis interdum purus urna imperdiet lorem. Donec blandit at massa nec faucibus. Nulla vel neque quis nulla aliquam malesuada ut vitae dui. Cras volutpat nisi turpis, eget auctor elit aliquam non. Ut non erat vitae nibh sagittis aliquet et vitae massa. Quisque scelerisque vitae dolor ut gravida. Aliquam in dolor ut tortor mattis aliquet. Quisque laoreet facilisis gravida. Integer volutpat non arcu eu interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n Nunc commodo suscipit nunc quis auctor. Nunc congue sapien massa, non molestie nulla volutpat id. Curabitur consequat ligula vitae risus feugiat, id semper lectus tempor. Phasellus non bibendum velit, vitae venenatis mi. Cras vehicula, risus et tincidunt ultrices, metus ex hendrerit augue, facilisis venenatis ante dui id nulla. Nulla sit amet mauris ut eros malesuada porta non ut tellus. In hac habitasse platea dictumst. Vivamus quis mauris cursus, auctor metus semper, varius enim. Integer elementum tortor quis felis elementum, non luctus nisi accumsan. Cras gravida turpis id enim mollis, sit amet efficitur arcu auctor. Donec id nibh eget nibh maximus mattis. Sed nulla eros, mollis at efficitur id, elementum non turpis. Phasellus sem diam, fringilla a molestie in, porta quis libero. \n Vivamus tempus dapibus neque vitae bibendum. Duis id lobortis dui. Nunc enim mi, elementum sed arcu a, dapibus blandit massa. Cras bibendum, nulla eu lobortis mattis, eros lorem hendrerit libero, ut sodales orci metus quis nunc. Phasellus ac orci elementum, aliquam lectus et, vehicula erat. Suspendisse potenti. Suspendisse feugiat id lorem eget ullamcorper. Sed eget erat sed massa ultricies euismod at id mi. Vestibulum tempor ligula at eros viverra, scelerisque facilisis sem ullamcorper. Vestibulum lorem nisi, mollis non dignissim ac, suscipit eu tortor. Cras pretium eu dolor ac feugiat. Cras sit amet dolor ante. Curabitur egestas erat eu tortor efficitur, eu posuere urna dapibus. \n Integer vel justo libero. Fusce in erat vulputate, efficitur elit aliquam, imperdiet arcu. Etiam id mi blandit, lobortis lacus vel, dapibus massa. Praesent id mattis augue. Etiam accumsan, enim sed scelerisque elementum, magna lectus euismod turpis, eu aliquet mi tortor sit amet metus. Vestibulum gravida semper urna, et mattis felis cursus sed. Sed sed scelerisque magna, nec tristique dolor. Aliquam gravida elit nec ipsum iaculis egestas. Aliquam pharetra est mauris, ut commodo quam viverra vel. Phasellus ut tempor urna. Pellentesque posuere enim id arcu pulvinar dictum. Integer quis magna ac lectus egestas convallis. Aenean at libero varius, interdum purus in, molestie quam. Quisque tempus lectus nec accumsan suscipit. In hac habitasse platea dictumst. Integer eu nibh faucibus, commodo metus id, gravida est. \n Donec venenatis mauris arcu, vel feugiat tortor interdum in. Sed maximus tempor purus nec laoreet. Morbi tristique vel mi eget aliquet. Quisque ullamcorper libero quis rhoncus aliquam. Phasellus consequat, enim sit amet dapibus elementum, lectus mi placerat tortor, nec sodales sem tellus et nibh. Curabitur nec varius metus, ac rutrum ipsum. Nulla in nisi urna. \n Phasellus rutrum massa ac placerat laoreet. Donec libero erat, faucibus eget iaculis ut, ultrices et arcu. Quisque quis condimentum dolor, quis iaculis neque. Nam mattis justo a ullamcorper ornare. Donec vitae sapien quis est congue maximus. Nulla ultrices justo sed purus iaculis placerat. Nullam in ligula purus. Vestibulum feugiat, nibh et elementum finibus, urna felis aliquam ipsum, a ultrices erat nunc quis mauris. Etiam ut dictum magna. Maecenas malesuada quam odio, sit amet viverra massa rhoncus sollicitudin. In mattis ante ut ipsum ullamcorper vulputate ac eget nulla. Phasellus ut euismod.";

let litarr = lit.split(" ");
