import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import { useState } from "react";

function App() {
  const [ogMode, newMode] = useState("light");
  function changeTheme() {
    if (ogMode === "light") newMode("dark");
    else newMode("light");
  } // Change theme by sending function and state as prop
  return (
    <div className={`App text-bg-${ogMode}`}>
      <Navbar title="Text Modifier" theme={changeTheme} mode={ogMode} />
      <Main mode={ogMode} />
    </div>
  );
}

export default App;
