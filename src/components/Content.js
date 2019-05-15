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
      pickup: "",
      distance: "",
      duration: "",
      passengers: 2,
      childrenSeats: 0,
      luggage: 0,
      sportLuggage: 0,
      animals: 0,
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
    const { steps, content, summary, alerts } = this.props;
    const {form} = this.state;
    return (
      <div className="content">
        <Steps steps={steps} />
        <ContentBox
          handleInputs={this.handleInputs}
          content={content}
          alerts={alerts}
          form={form}
        />
        <Summary form={form} summary={summary}/>
      </div>
    );
  }
}

export { Content };
