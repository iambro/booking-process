import React, { Component } from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

class App extends Component {
  state = {
    language: "en",
    steps: {},
    content: {},
    summary: {},
    alerts: {}
  };

  setLanguage = e => {
    this.setState({ language: e.target.value });
  };

  getContent = () => {
    fetch("https://api.myjson.com/bins/14xooq")
      .then(response => response.json())
      .then(data =>
        this.setState({
          steps: data.translations[this.state.language].steps,
          content: data.translations[this.state.language].content,
          summary: data.translations[this.state.language].summary,
          alerts: data.translations[this.state.language].alerts
        })
      );
  };

  componentDidMount() {
    this.getContent();
    // fetch("https://ipinfo.io/json")
    //   .then(response => response.json())
    //   .then(data => data.country.toLowerCase())
    //   .then(lang => {
    //     if (["de", "en", "fr", "it", "es", "pl"].includes(lang)) {
    //       this.setState({ language: lang });
    //     }
    //   })
    //   .catch(err => console.log(err));
  }

  render() {
    const { steps, content, summary, alerts } = this.state;
    return (
      <>
        <Header setLanguage={this.setLanguage} language={this.state.language} />
        <Content
          steps={steps}
          content={content}
          summary={summary}
          alerts={alerts}
        />
        <Footer />
      </>
    );
  }
}

export { App };
