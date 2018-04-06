import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Bills from './component/bills';
// import ReactTable from "react-table";
import Home from './component/home';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Home />
      <Bills />

      </div>
    );
  }
}

export default App;
