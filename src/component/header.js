import React from "react";

const Header = () => {
  return (
    <div id="headerRegion">
      <div>
        <div id="header" className="navbar navbar-fixed-top">
          <div className="container">
            <div id="top_menu" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2/"
                    className="navigate"
                    id="header-nav-home"
                  >
                    <i className="icon icon_home" /> Home
                  </a>
                </li>
                <li className="dropdown" style={{ display: "none" }}>
                  <a
                    href="https://dw-fi.intrum.com/dw2/messages"
                    className="navigate"
                    id="header-nav-messages"
                  >
                    <i className="icon icon_messages_contactus" />Messages
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2/dictionary"
                    className="navigate"
                    id="header-nav-dictionary"
                  >
                    <i className="icon icon_dictionary" />Dictionary
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    id="change-language-btn"
                  >
                    <i className="icon icon_language" /> Language
                  </a>
                  <ul
                    className="dropdown-menu lang"
                    role="menu"
                    id="change-language"
                  />
                </li>
                <li className="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2/dictionary"
                    className="navigate"
                    id="header-nav-dictionary"
                  >
                    <i className="icon icon_profile" />Reward System
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right hidden-xs">
                <li className="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2#"
                    className="dropdown-toggle profile-menu"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    id="header-profile-menu-btn-desktop"
                  >
                    <i className="icon icon_profile" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
