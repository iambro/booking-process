import React, { Component } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

class App extends Component {
  state = {
    language: "en"
  };

  setLanguage = e => {
    this.setState({ language: e.target.value });
  };

  // componentDidMount() {
  //   fetch("https://ipinfo.io/json")
  //     .then(response => response.json())
  //     .then(data => data.country.toLowerCase())
  //     .then(lang => {
  //       if (["de", "en", "fr", "it", "es", "pl"].includes(lang)) {
  //         this.setState({ language: lang });
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <>
        <Header setLanguage={this.setLanguage} language={this.state.language} />
        <Content />
        <Footer />
      </>
    );
  }
}

export { App };
