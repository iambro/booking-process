import React, { Component } from "react";
import { Header } from "./Header";
import { Content } from "./Content";

class App extends Component {
  state = {
    language: "en",
    steps: {},
    content: {},
    summary: {}
  };

  setLanguage = e => {
    this.setState({ language: e.target.value });
    this.getContent();
  };

  getContent = () => {
    fetch("https://api.myjson.com/bins/qxt0y")
      .then(response => response.json())
      .then(data =>
        this.setState({
          steps: data.translations[this.state.language].steps,
          content: data.translations[this.state.language].content,
          summary: data.translations[this.state.language].summary
        })
      );
  };

  componentDidMount() {
    this.getContent();
  }

  render() {
    const { steps, content, summary, language } = this.state;
    return (
      <>
        <Header setLanguage={this.setLanguage} language={this.state.language} />
        <Content
          steps={steps}
          content={content}
          summary={summary}
          language={language}
        />
      </>
    );
  }
}

export { App };
