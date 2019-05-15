import React from "react";
import { Options } from "./Options";

const openStyle = {
  display: "block"
};

const closeStyle = {
  display: "none"
};

const ContentBoxAdditional = props => {
  const { content, form, isHidden, handleIsHidden } = props;
  let passengersNumber, passengersText;
  let bagsNumber;

  if (form.passengers === 1) {
    passengersNumber = `${form.passengers}`;
    passengersText = `${content.passenger}`;
  } else {
    passengersNumber = `1-${form.passengers}`;
    passengersText = `${content.passengers}`;
  }

  if (form.luggage + form.sportLuggage <= 2) {
    bagsNumber = "1-2";
  } else {
    bagsNumber = `1-${form.luggage + form.sportLuggage}`;
  }

  return (
    <>
      <div className="form-advanced-description">
        <p className="form-advanced-decription-text">
          {`${
            content.for
          } ${passengersNumber} ${passengersText} ${bagsNumber} ${
            content.bags
          }`}
        </p>
        <button className="form-advanced-button" onClick={handleIsHidden}>
          {isHidden ? content.more : content.hide}
        </button>
      </div>
      <div className="form-advanced-options">
        <div className="form-group">
          <label>
            <i className="far fa-user" />
          </label>
          <select
            className="form-input-select"
            name="passengers"
            defaultValue="2"
          >
            <Options min={1} max={9} />
          </select>
          <span className="form-arrow" />
        </div>
        <div className="form-group">
          <label>
            <i className="fas fa-briefcase" />
          </label>
          <select
            className="form-input-select"
            name="luggages"
            defaultValue="2"
          >
            <Options min={0} max={9} />
          </select>
          <span className="form-arrow" />
        </div>
        <div className="form-group">
          <label>
            <i className="fas fa-luggage-cart" />
          </label>
          <select
            className="form-input-select"
            name="sportLuggages"
            defaultValue="0"
          >
            <Options min={0} max={4} />
          </select>
          <span className="form-arrow" />
        </div>
        <div className="form-group">
          <label>
            <i className="fas fa-dog" />
          </label>
          <select className="form-input-select" name="animals" defaultValue="0">
            <Options min={0} max={5} />
          </select>
          <span className="form-arrow" />
        </div>
        <div className="form-group">
          <label>
            <i className="fas fa-baby" />
          </label>
          <select
            className="form-input-select"
            name="childrenSeats"
            defaultValue="0"
          >
            <Options min={0} max={3} />
          </select>
          <span className="form-arrow" />
        </div>
      </div>
    </>
  );
};

export { ContentBoxAdditional };
