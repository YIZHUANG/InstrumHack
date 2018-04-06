import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import ReactTable from "react-table";
import Home from './component/home';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Home />
      </div>
    );
  }
}

export default App;
