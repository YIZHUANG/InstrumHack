import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import ReactTable from 'react-table'

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div class="main-header-line">
          <div class="container">
            <h1>Lower your debt today</h1>
            <p>We will help you</p>
          </div>
        </div>
        <div class="container">
        </div>
      </div>
    );
  }
}

export default App;
