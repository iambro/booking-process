import React, { Component } from "react";
import { Steps } from "./Steps";
import { ContentBox } from "./ContentBox";
import { Summary } from "./Summary";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content">
        <Steps />
        <ContentBox />
        <Summary />
      </div>
    );
  }
}

export { Content };
