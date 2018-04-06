import React, { Component } from "react";
import jobs from "../assets/jobs";
import Tables from "./table";
import { HashRouter, Route, Router, Link } from "react-router-dom";
import jobFields from "../assets/jobs";

export default class RewardSystem extends Component {
  renderJobs() {
    return jobFields.map((job, index) => <Tables key={index} job={job} />);
  }

  render() {
    return (
      <div className="Container">
        <div class="main-header-line">
          <div class="container">
            <h1>Reward System</h1>
            <p>Bitch!</p>
          </div>
        </div>
        <div class="table_container">{this.renderJobs()}</div>
      </div>
    );
  }
}
