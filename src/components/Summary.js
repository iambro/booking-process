import React from "react";



const openStyle = { display: "block" };
const closeStyle = { display: "none" };

const Summary = props => {
  const summaryList = Object.keys(props.form).map(item =>
    props.form[item] !== 0 && props.form[item] !== "" ? (
      <tr key={item}>
        <th>{props.summary[item]}</th>
        <td>{props.form[item]}</td>
      </tr>
    ) : null
  );

  return (
    <div className="summary" style={props.isSummaryVisible ? openStyle : closeStyle}>
      <div className="summary-info">
        <h1 className="summary-header">{props.summary.your}</h1>
        <table className="summary-details">
          <tbody>{summaryList}</tbody>
        </table>
      </div>
      <div className="summary-map" />
    </div>
  );
};

export { Summary };
