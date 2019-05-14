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
          <ul className="header-menu">
            <li
              className="header-menu-item"
              onMouseEnter={this.handleHoverOn}
              onMouseLeave={this.handleHoverOff}
            >
              <span className="header-menu-item-languages">EN</span>
              <ul
                className="header-menu-dropdown"
                style={this.state.isOpen ? openStyle : closeStyle}
              >
                <li className="header-menu-dropdown-item header-language-de">
                  <a
                    className="header-language-button header-language-button-de"
                    href="/"
                  >
                    <img className="header-language-flag" src={deflag} alt="" />
                    Deutsch (DE)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-en">
                  <a
                    className="header-language-button header-language-button-en"
                    href="/"
                  >
                    <img className="header-language-flag" src={enflag} alt="" />
                    English (EN)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-fr">
                  <a
                    className="header-language-button header-language-button-fr"
                    href="/"
                  >
                    <img className="header-language-flag" src={frflag} alt="" />
                    Français (FR)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-de">
                  <a
                    className="header-language-button header-language-button-de"
                    href="/"
                  >
                    <img className="header-language-flag" src={itflag} alt="" />
                    Italiano (IT)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-es">
                  <a
                    className="header-language-button header-language-button-es"
                    href="/"
                  >
                    <img className="header-language-flag" src={esflag} alt="" />
                    Español (ES)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-pl">
                  <a
                    className="header-language-button header-language-button-pl"
                    href="/"
                  >
                    <img className="header-language-flag" src={plflag} alt="" />
                    Polish (PL)
                  </a>
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
