import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import Header from "./component/header";
import ReactTable from "react-table";
import Home from "./component/home";
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
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
