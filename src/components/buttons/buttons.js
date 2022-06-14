import React from "react";
import "./buttons.css";
import { useState } from "react";
const Buttons = () => {
  const clickme = () => {
    alert("hii");
  };
  const [isChecked, setIsChecked] = useState(false);
  const [counter, setCounter] = useState(0);
  const onChange = () => {
    setIsChecked(!isChecked);
  };
  const onTextclick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button data-testid="button" onClick={clickme}>
        click me
      </button>
      <div>
        <label>
          <input type="checkbox" checked={isChecked} onChange={onChange} />
          {isChecked ? "labelOn" : "labelOff"}
        </label>
      </div>
      <div>
        <button onClick={onTextclick} data-testid="counter-btn">
          {counter}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
