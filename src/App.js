import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import ReactTable from "react-table";

class App extends Component {
  render() {
    return (
      <div>
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
                    <li class="dropdown" style={{display: "none"}}>
                      <a
                        href="https://dw-fi.intrum.com/dw2/messages"
                        class="navigate"
                        id="header-nav-messages"
                      >
                        <i class="icon icon_messages_contactus" />Messages
                      </a>
                    </li>

                    <li class="dropdown" style={{display: "none"}}>
                      <a
                        href="https://dw-fi.intrum.com/dw2/pay-now"
                        class="navigate"
                        id="header-nav-payment-info"
                      >
                        <i class="icon icon_paymentinfo" />Pay now
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
        <div className="Container">
          <div class="main-header-line">
            <div class="container">
              <h1>Lower your debt today</h1>
              <p>We will help you</p>
            </div>
          </div>
          <div class="table_container" />
        </div>
      </div>
    );
  }
}

export default App;
