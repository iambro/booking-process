import React, { Component } from "react";

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

  handleHover = () => {
    this.setState({ isOpen: !this.state.isOpen });
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
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
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
                    Deutsch (DE)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-en">
                  <a
                    className="header-language-button header-language-button-en"
                    href="/"
                  >
                    English (EN)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-fr">
                  <a
                    className="header-language-button header-language-button-fr"
                    href="/"
                  >
                    Français (FR)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-de">
                  <a
                    className="header-language-button header-language-button-de"
                    href="/"
                  >
                    Italiano (IT)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-es">
                  <a
                    className="header-language-button header-language-button-es"
                    href="/"
                  >
                    Español (ES)
                  </a>
                </li>
                <li className="header-menu-dropdown-item header-language-pl">
                  <a
                    className="header-language-button header-language-button-pl"
                    href="/"
                  >
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
