import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import Header from "./component/header";
import Bills from "./component/bills";
// import ReactTable from "react-table";
import Home from "./component/home";
import ReactTable from "react-table";
import RewardSystem from "./component/RewardSystem";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/RewardSystem" component={RewardSystem} />
              <Route exact path="/" component={Home} />
            </Switch>
            <Bills />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
