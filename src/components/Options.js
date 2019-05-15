import React from "react";

const Options = props => {
  let arr = [];
  for (let i = props.min; i < props.max; i++) {
    arr.push(i);
  }
  const list = arr.map(x => (
    <option key={x} value={x}>
      {x}
    </option>
  ));

  return <>{list}</>;
};

export { Options };
