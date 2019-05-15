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
      perHour: 0,
      voucherCode: ""
    },
    todayDate: []
  };

  handleInputs = e => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let statusCopy = Object.assign({}, this.state);
    statusCopy.form[inputName] = inputValue;
    this.setState(statusCopy);
  };

  componentDidMount() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    let hh = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");
    let statusCopy = Object.assign({}, this.state);
    statusCopy.form.date = `${yyyy}-${mm}-${dd}`;
    statusCopy.form.pickup = `${hh}:${mm}`;
    statusCopy.todayDate = [dd, mm, yyyy, hh, min];
    this.setState(statusCopy);
  }

  render() {
    const { steps, content, summary, alerts, language } = this.props;
    const { form, todayDate } = this.state;
    return (
      <div className="content">
        <Steps steps={steps} />
        <ContentBox
          handleInputs={this.handleInputs}
          content={content}
          alerts={alerts}
          form={form}
          todayDate={todayDate}
          language={language}
        />
        <Summary form={form} summary={summary} />
      </div>
    );
  }
}

export { Content };
