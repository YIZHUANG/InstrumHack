import React, { Component } from "react";
// import jobs from "../assets/jobs";
import Tables from "./table";
// import { HashRouter, Route, Router, Link } from "react-router-dom";
import jobFields from "../assets/jobs";
import SearchBar from "material-ui-search-bar";
import JobList from "../assets/jobList";
import { thead, Table } from "react-bootstrap";

export default class RewardSystem extends Component {
  renderJobs() {
    return JobList.map((job, index) => <Tables key={index} job={job} />);
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
        <div className="table_container">
          <div className="table_content">
            <SearchBar
              onChange={() => console.log("onChange")}
              onRequestSearch={() => console.log("onRequestSearch")}
              style={{
                margin: "0 auto",
                maxWidth: 400,
                marginTop: 10
              }}
            />
          </div>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Case number</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody>{this.renderJobs()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
