import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div id="headerRegion">
      <div>
        <div id="header" class="navbar navbar-fixed-top">
          <div class="container">
            <div id="top_menu" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2/"
                    class="navigate"
                    id="header-nav-home"
                  >
                    <i class="icon icon_home" /> Home
                  </a>
                </li>
                <li class="dropdown" style={{ display: "none" }}>
                  <a
                    href="https://dw-fi.intrum.com/dw2/messages"
                    class="navigate"
                    id="header-nav-messages"
                  >
                    <i class="icon icon_messages_contactus" />Messages
                  </a>
                </li>
                <li class="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2/dictionary"
                    class="navigate"
                    id="header-nav-dictionary"
                  >
                    <i class="icon icon_dictionary" />Dictionary
                  </a>
                </li>
                <li class="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    id="change-language-btn"
                  >
                    <i class="icon icon_language" /> Language
                  </a>
                  <ul
                    class="dropdown-menu lang"
                    role="menu"
                    id="change-language"
                  />
                </li>
                <li class="dropdown">
                  <Link to="/RewardSystem">
                    <i class="icon icon_profile" />Reward System
                  </Link>
                </li>
              </ul>
              <ul class="nav navbar-nav navbar-right hidden-xs">
                <li class="dropdown">
                  <a
                    href="https://dw-fi.intrum.com/dw2#"
                    class="dropdown-toggle profile-menu"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    id="header-profile-menu-btn-desktop"
                  >
                    <i class="icon icon_profile" />
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
export default withRouter(Header);
