import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./component/header";
import ReactTable from "react-table";

class App extends Component {
  render() {
    return (
      <div>
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
                    <li className="dropdown" style={{display: "none"}}>
                      <a
                        href="https://dw-fi.intrum.com/dw2/messages"
                        className="navigate"
                        id="header-nav-messages"
                      >
                        <i className="icon icon_messages_contactus" />Messages
                      </a>
                    </li>

                    <li className="dropdown" style={{display: "none"}}>
                      <a
                        href="https://dw-fi.intrum.com/dw2/pay-now"
                        className="navigate"
                        id="header-nav-payment-info"
                      >
                        <i className="icon icon_paymentinfo" />Pay now
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
        <div className="Container">
          <div className="main-header-line">
            <div className="container">
              <h1>Lower your debt today</h1>
              <p>We will help you</p>
            </div>
          </div>
          <div className="table_container" />
        </div>
      </div>
    );
  }
}

export default App;
