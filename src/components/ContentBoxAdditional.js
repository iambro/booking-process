import React from "react";
import { Options } from "./Options";

const openStyle = {
  display: "flex"
};

const closeStyle = {
  display: "none"
};

const ContentBoxAdditional = props => {
  const {
    content,
    form,
    isHidden,
    handleIsHidden,
    isChecked,
    handleIsChecked,
    handleInputs
  } = props;
  let passengersNumber, passengersText;
  let bagsNumber;

  if (Number(form.passengers) === 1) {
    passengersNumber = `${form.passengers}`;
    passengersText = `${content.passenger}`;
  } else {
    passengersNumber = `1-${form.passengers}`;
    passengersText = `${content.passengers}`;
  }

  if (Number(form.luggage) + Number(form.sportLuggage) <= 2) {
    bagsNumber = "1-2";
  } else {
    bagsNumber = `1-${Number(form.luggage) + Number(form.sportLuggage)}`;
  }

  const pickupTime = () => {
    const time = form.pickup;
    const h = form.perHour;
    const hh = time.slice(0, 2);
    const mm = time.slice(3, 5);
    return Number(hh) + Number(h) <= 24
      ? `${Number(hh) + Number(h)}:${mm}`
      : `${Number(hh) + Number(h) - 24}:${mm}`;
  };

  return (
    <div className="form-advanced">
      <div className="form-advanced-description">
        <p className="form-advanced-decription-text">
          {`${
            content.for
          } ${passengersNumber} ${passengersText} ${bagsNumber} ${
            content.bags
          }`}
        </p>
        <button className="form-advanced-button" onClick={handleIsHidden}>
          <span>{isHidden ? content.more : content.hide}</span>
        </button>
      </div>
      <div
        className="form-advanced-options"
        style={isHidden ? closeStyle : openStyle}
      >
        <div className="form-group">
          <label className="form-group-label">
            <i className="far fa-user" />
          </label>
          <select
            id="passengers"
            className="form-group-input"
            name="passengers"
            defaultValue="2"
            onChange={handleInputs}
          >
            <Options min={1} max={9} />
          </select>
          <label for="passengers" className="form-arrow">
            <i class="fas fa-chevron-down" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-group-label">
            <i className="fas fa-briefcase" />
          </label>
          <select
            id="luggage"
            className="form-group-input"
            name="luggage"
            defaultValue="2"
            onChange={handleInputs}
          >
            <Options min={0} max={9} />
          </select>
          <label for="luggage" className="form-arrow">
            <i class="fas fa-chevron-down" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-group-label">
            <i className="fas fa-luggage-cart" />
          </label>
          <select
            id="sportLuggage"
            className="form-group-input"
            name="sportLuggage"
            defaultValue="0"
            onChange={handleInputs}
          >
            <Options min={0} max={4} />
          </select>
          <label for="sportLuggage" className="form-arrow">
            <i class="fas fa-chevron-down" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-group-label">
            <i className="fas fa-dog" />
          </label>
          <select
            id="animals"
            className="form-group-input"
            name="animals"
            defaultValue="0"
            onChange={handleInputs}
          >
            <Options min={0} max={5} />
          </select>
          <label for="animals" className="form-arrow">
            <i class="fas fa-chevron-down" />
          </label>
        </div>
        <div className="form-group">
          <label className="form-group-label">
            <i className="fas fa-baby" />
          </label>
          <select
            id="childrenSeats"
            className="form-group-input"
            name="childrenSeats"
            defaultValue="0"
            onChange={handleInputs}
          >
            <Options min={0} max={3} />
          </select>
          <label for="childrenSeats" className="form-arrow">
            <i class="fas fa-chevron-down" />
          </label>
        </div>
      </div>
      <div
        className="form-advanced-checkbox"
        style={isHidden ? closeStyle : openStyle}
      >
        <input
          type="checkbox"
          className="form-advanced-checkbox-input"
          onChange={handleIsChecked}
        />
        <p>{isChecked ? content.perHourFor : content.perHour}</p>
        <div
          className="form-advanced-checkbox-checked"
          style={isChecked ? openStyle : closeStyle}
        >
          <div className="form-group">
            <label className="form-group-label">
              <i className="fas fa-stopwatch" />
            </label>
            <select
              className="form-group-input"
              name="perHour"
              defaultValue="1"
              onChange={handleInputs}
            >
              <Options min={1} max={25} add={"h"} />
            </select>
            <span className="form-arrow">
              <i class="fas fa-chevron-down" />
            </span>
          </div>
          <p>
            {content.till} {pickupTime()}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ContentBoxAdditional };
