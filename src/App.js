import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div className="App">
      <div>
        <button
          style={{backgroundColor: checked?'gray': buttonColor }}
          onClick={() => setButtonColor(newButtonColor)}
          disabled={checked}
        >
          Change to {newButtonColor}
        </button>
      </div>
      <input id ="disable-button" onChange={() => setChecked(!checked)} type="checkbox" />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
