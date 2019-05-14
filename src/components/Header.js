import React, { Component } from "react";
import deflag from "./IMG/de.svg";
import enflag from "./IMG/en.svg";
import frflag from "./IMG/fr.svg";
import itflag from "./IMG/it.svg";
import esflag from "./IMG/es.svg";
import plflag from "./IMG/pl.svg";

const openStyle = {
  display: "block"
};

const closeStyle = {
  display: "none"
};

class Header extends Component {
  state = {
    isOpen: false
  };

  handleHoverOn = () => {
    this.setState({ isOpen: true });
  };

  handleHoverOff = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div className="header">
        <div className="header-content">
          <h1 className="header-logo">
            <a href="https://talixo.pl/">
              <img
                src="https://static.talixo.de/images/talixo_logo_2x.png"
                alt="Talixo"
                className="header-logo-img"
              />
            </a>
          </h1>
          <ul className="header-menu" onClick={this.handleHoverOff}>
            <li
              className="header-menu-item"
              onMouseEnter={this.handleHoverOn}
              onMouseLeave={this.handleHoverOff}
            >
              <span className="header-menu-item-languages">
                {this.props.language}
              </span>
              <ul
                className="header-menu-dropdown"
                style={this.state.isOpen ? openStyle : closeStyle}
              >
                <li className="header-menu-dropdown-item header-language-de">
                  <button
                    className="header-language-button header-language-button-de"
                    value="de"
                    onClick={this.props.setLanguage}
                  >
                    <img className="header-language-flag" src={deflag} alt="" />
                    Deutsch (DE)
                  </button>
                </li>
                <li className="header-menu-dropdown-item header-language-en">
                  <button
                    className="header-language-button header-language-button-en"
                    value="en"
                    onClick={this.props.setLanguage}
                  >
                    <img className="header-language-flag" src={enflag} alt="" />
                    English (EN)
                  </button>
                </li>
                <li className="header-menu-dropdown-item header-language-fr">
                  <button
                    className="header-language-button header-language-button-fr"
                    value="fr"
                    onClick={this.props.setLanguage}
                  >
                    <img className="header-language-flag" src={frflag} alt="" />
                    Français (FR)
                  </button>
                </li>
                <li className="header-menu-dropdown-item header-language-it">
                  <button
                    className="header-language-button header-language-button-it"
                    value="it"
                    onClick={this.props.setLanguage}
                  >
                    <img className="header-language-flag" src={itflag} alt="" />
                    Italiano (IT)
                  </button>
                </li>
                <li className="header-menu-dropdown-item header-language-es">
                  <button
                    className="header-language-button header-language-button-es"
                    value="es"
                    onClick={this.props.setLanguage}
                  >
                    <img className="header-language-flag" src={esflag} alt="" />
                    Español (ES)
                  </button>
                </li>
                <li className="header-menu-dropdown-item header-language-pl">
                  <button
                    className="header-language-button header-language-button-pl"
                    value="pl"
                    onClick={this.props.setLanguage}
                  >
                    <img className="header-language-flag" src={plflag} alt="" />
                    Polish (PL)
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Header };
