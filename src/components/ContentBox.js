import React, { Component } from "react";
import { ContentBoxAdditional } from "./ContentBoxAdditional";

const openStyle = { display: "block" };
const closeStyle = { display: "none" };

class ContentBox extends Component {
  state = {
    calendarIsOpen: false,
    todayDate: [],
    isHidden: true,
    isChecked: false
  };

  handleCalendarOpen = () => {
    this.setState({
      calendarIsOpen: !this.state.calendarIsOpen
    });
  };

  handleButton = e => {
    e.preventDefault();
  };

  handleIsHidden = e => {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  handleIsChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  componentDidMount() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let hh = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");
    this.setState({
      todayDate: [dd, mm, yyyy, hh, min]
    });
  }

  render() {
    const { todayDate, calendarIsOpen, isHidden, isChecked } = this.state;
    const { content, alerts, form } = this.props;
    return (
      <div className="content-box">
        <form className="form">
          <div className="form-group">
            <label className="form-title">{content.pickup}:</label>
            <input
              className="form-input"
              type="text"
              name="from"
              onChange={this.props.handleInputs}
            />
            <span className="form-arrow" />
          </div>
          <div className="form-group">
            <label className="form-title">{content.destination}:</label>
            <input
              className="form-input"
              type="text"
              name="to"
              onChange={this.props.handleInputs}
            />
            <span className="form-arrow" />
          </div>
          <div className="form-date">
            <div className="form-group date-box">
              <label className="form-title date">
                <span className="form-date__numeric">13.05</span>
                <span className="form-date__human">{content.today}</span>
              </label>
              <label className="form-title date">
                <span className="form-date__numeric">14.05</span>
                <span className="form-date__human">{content.tomorrow}</span>
              </label>
              <label className="form-title date">
                <span className="form-date__numeric">15.05</span>
                <span className="form-date__human">Wednesday</span>
              </label>
              <span className="form-datepicker">
                <button
                  type="button"
                  className="form-datepicker-button"
                  onClick={this.handleCalendarOpen}
                >
                  <svg
                    className="button-svg"
                    viewBox="0 0 48.000002 51.999999"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.014 25.88c.067.093.17.177.312.25.14.072.295.107.465.107.113 0 .225-.017.34-.05.114-.035.228-.097.338-.194l2.655-2.22c-.025.46-.038.898-.038 1.315v10.766h-3.74v2.363h10.21v-2.363h-3.32v-16.13h-2.588l-5.627 4.788zm-7.943 8.94c-.267.28-.6.51-1 .685-.4.175-.87.26-1.403.26-.477 0-.887-.07-1.232-.212-.344-.14-.645-.32-.9-.547-.253-.226-.473-.484-.657-.77-.182-.292-.35-.586-.504-.883-.093-.182-.228-.316-.4-.41-.176-.095-.374-.14-.595-.14-.248 0-.49.05-.73.15l-1.39.578c.256.793.56 1.493.918 2.097.358.604.792 1.116 1.302 1.53.51.42 1.11.734 1.8.946.688.213 1.496.32 2.422.32.852 0 1.658-.122 2.42-.37.76-.247 1.43-.612 2.01-1.092.577-.48 1.036-1.073 1.377-1.78.34-.707.51-1.52.51-2.44 0-1.08-.274-1.98-.818-2.696-.544-.714-1.37-1.246-2.476-1.597.46-.153.87-.343 1.23-.574.362-.23.67-.51.922-.843.248-.334.438-.723.572-1.17.13-.447.197-.964.197-1.55 0-.673-.13-1.298-.39-1.88-.26-.58-.63-1.083-1.116-1.512-.484-.43-1.07-.767-1.752-1.01-.685-.242-1.455-.364-2.303-.364-.818 0-1.582.112-2.292.34-.71.227-1.34.562-1.887 1.01-.55.445-1.006 1.004-1.373 1.672-.365.668-.61 1.445-.74 2.333l1.66.285c.153.027.297.04.433.04.29 0 .523-.07.703-.212.18-.14.32-.37.42-.694.196-.623.54-1.13 1.034-1.527.494-.395 1.115-.592 1.862-.592.825 0 1.477.224 1.953.67.476.448.714 1.11.714 1.987 0 .408-.06.784-.18 1.123-.118.343-.33.633-.63.877-.304.242-.71.433-1.22.567-.51.138-1.153.205-1.926.205v2.26c.935 0 1.682.073 2.238.215.556.147.984.346 1.283.6.297.257.494.566.586.927.094.36.14.766.14 1.208 0 .35-.065.696-.197 1.04-.134.346-.333.66-.6.94zM35.994 0h-3.988v11.93h3.988zM15.998 0H12.01v11.93h3.987zm13.99 5.937H18.01v3.99h11.977zm7.992 0V9.99h6.094v37.958H3.986V9.928h6.034v-3.93H0V52h48V5.937H37.98"
                      fill="#f03a1f"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <input
                  className="form-datepicker-input"
                  type="date"
                  style={calendarIsOpen ? openStyle : closeStyle}
                  min={`${todayDate[2]}-${todayDate[1]}-${todayDate[0]}`}
                  name="date"
                  onChange={this.props.handleInputs}
                />
              </span>
            </div>
            <div className="form-group time-box">
              <label className="form-title">{content.at}:</label>
              <input
                className="form-input__time"
                type="time"
                name="pickup"
                onChange={this.props.handleInputs}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-title">{content.voucher}:</label>
            <input
              className="form-input"
              type="text"
              name="voucherCode"
              onChange={this.props.handleInputs}
            />
          </div>

          <ContentBoxAdditional
            content={content}
            form={form}
            isHidden={isHidden}
            isChecked={isChecked}
            handleIsHidden={this.handleIsHidden}
            handleIsChecked={this.handleIsChecked}
            handleInputs={this.props.handleInputs}
          />

          <button className="form-button" onClick={this.handleButton}>
            {content.startBooking}
          </button>
        </form>
      </div>
    );
  }
}

export { ContentBox };
