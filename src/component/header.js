import React from "react";
import { Link, withRouter } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton';

const Header = () => {
  return (
    <div id="headerRegion">
      <div>
        <div id="header" className="navbar navbar-fixed-top">
          <div className="container">
            <div id="top_menu" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <Link className="navigate" id="header-nav-home" to="/">
                    <i className="icon icon_home" />
                  </Link>
                </li>
                <li className="dropdown" style={{ display: "none" }}>
                  <a href="#" className="navigate" id="header-nav-messages">
                    <i className="icon icon_messages_contactus" />
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="navigate" id="header-nav-dictionary">
                    <i className="icon icon_dictionary" />
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    id="change-language-btn"
                  >
                    <i className="icon icon_language" />
                  </a>
                  <ul
                    className="dropdown-menu lang"
                    role="menu"
                    id="change-language"
                  />
                </li>
                <li className="dropdown">
                  <Link to="/RewardSystem">
                    <i className="material-icons">work</i>
                  </Link>
                </li>
                <li className="dropdown">
                  <Link to="/CallCenter">
                    <i className="material-icons">call</i>
                  </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right hidden-xs">
                <li className="dropdown" >
                  <a
                    // href="https://dw-fi.intrum.com/dw2#"
                    className="dropdown-toggle profile-menu"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    id="header-profile-menu-btn-desktop"
                  >
                    <i
                      className="icon icon_profile"
                    />                    
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
