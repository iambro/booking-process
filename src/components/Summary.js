import React from "react";

const Summary = () => {
  return (
      <div className="summary">
        <h1 className="summary-header">Your booking</h1>
        <table className="summary-details">
          <tbody>
          <tr>
              <th>From</th>
              <td>Hilton Gdansk, Targ Rybny 1, 80-838 Gdańsk, Poland</td>
            </tr>
            <tr>
              <th>To</th>
              <td>Berlin Brandenburg Airport (BER)</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>Tuesday, 14 May 2019</td>
            </tr>
            <tr>
              <th>Pickup Time</th>
              <td>Distance</td>
            </tr>
            <tr>
              <th>Estimated duration</th>
              <td>6:35</td>
            </tr>
            <tr>
              <th>Passengers</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Children seats</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Luggage</th>
              <td>2</td>
            </tr>
            <tr>
              <th>Sport luggage</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Animals</th>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export { Summary };
