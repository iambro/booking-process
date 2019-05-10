import React from "react";

const currentStyle = {
  border: "3px solid #ff4800",
  color: "#ffffff"
};

const Steps = () => {
  return (
    <div className="steps">
      <ol className="steps-list">
        <li className="steps-list-element current">
          <span style={currentStyle}>1</span>
          <p>Where & When</p>
        </li>
        <li className="steps-list-element">
          <span>2</span>
          <p>Choose a Car</p>
        </li>
        <li className="steps-list-element">
          <span>3</span>
          <p>Details & Payment</p>
        </li>
      </ol>
    </div>
  );
};

export { Steps };
