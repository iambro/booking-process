import React from "react";

const currentStyle = {
  border: "3px solid #ff4800",
  color: "#ffffff"
};

const Steps = props => {
  const { steps } = props;
  return (
    <div className="steps">
      <ol className="steps-list">
        <li className="steps-list-element current">
          <span style={currentStyle}>1</span>
          <p>{steps.stepOne}</p>
        </li>
        <li className="steps-list-element">
          <span>2</span>
          <p>{steps.stepTwo}</p>
        </li>
        <li className="steps-list-element">
          <span>3</span>
          <p>{steps.stepThree}</p>
        </li>
      </ol>
    </div>
  );
};

export { Steps };
