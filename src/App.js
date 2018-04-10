import React, { Component } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider } from "material-ui/styles";

import Header from "./component/header";
import Home from "./component/home";
import RewardSystem from "./component/RewardSystem";
import CallCenter from "./component/CallCenter";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/RewardSystem" component={RewardSystem} />
              <Route exact path="/CallCenter" component={CallCenter} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
