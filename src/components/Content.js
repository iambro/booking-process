import React, { Component } from "react";
import { Steps } from "./Steps";
import { ContentBox } from "./ContentBox";
import { Summary } from "./Summary";

class Content extends Component {
  state = {
    form: {
      from: "",
      to: "",
      date: "",
      pickupTime: "",
      distance: "",
      estimatedDuration: "",
      passengers: "",
      childrenSeats: "",
      luggage: "",
      sportLuggage: "",
      animals: "",
      voucherCode: ""
    }
  };

  handleInputs = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let statusCopy = Object.assign({}, this.state);
    statusCopy.form[inputName] = inputValue;
    this.setState(statusCopy);
  };

  render() {
    // const {
    //   from,
    //   to,
    //   date,
    //   pickupTime,
    //   distance,
    //   estimatedDuration,
    //   passengers,
    //   childrenSeats,
    //   luggage,
    //   sportLuggage,
    //   animals,
    //   voucherCode
    // } = this.state.form;
    return (
      <div className="content">
        <Steps />
        <ContentBox handleInputs={this.handleInputs} />
        <Summary form={this.state.form} />
      </div>
    );
  }
}

export { Content };
