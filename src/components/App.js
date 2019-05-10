import React, { Component } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export { App };
