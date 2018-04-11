import React, { Component } from "react";
// import jobs from "../assets/jobs";
import Tables from "./table";
// import { HashRouter, Route, Router, Link } from "react-router-dom";
import jobFields from "../assets/jobs";
import SearchBar from "material-ui-search-bar";
import JobList from "../assets/jobList";
import { thead, Table } from "react-bootstrap";
import GridListExampleSimple from "../component/CategoryGrid";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";

export default class RewardSystem extends Component {
  state = { step: 0 };
  renderJobs() {
    return JobList.map((job, index) => <Tables key={index} job={job} />);
  }

  render() {
    return (
      <div className="Container">
        <div className="main-header-line">
          <div className="container">
            <h1>Rewards</h1>
            <p>More ways to Finance</p>
          </div>
        </div>
        <div
          style={{ fontFamily: "Arial", textAlign: "center", marginTop: 50 }}
        >
          <p style={{ fontSize: 16 }}>
            <b style={{ fontSize: 18 }}>Rewards</b> are a brand new way to way
            to finance your debt. Discover various temporary positions based on
            your skills and preference. Take charge of your finance, <br />{" "}
            learn new skills and gain trust. Choose from a variety of open and
            temporary Jobs to lower your debt amount. simply dummy text of the
            printing and typesetting industry. <br /> Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div>
          <h1 style={{ fontFamily: "Arial", textAlign: "center" }}>
            How does it work?
          </h1>
          <Stepper
            style={{ marginLeft: 300 }}
            activeStep={this.state.step}
            orientation="vertical"
          >
            <Step onClick={() => this.setState({ step: 0 })}>
              <StepLabel>
                Select the category that you are insterested in
              </StepLabel>
              <StepContent>
                <p>
                  Browse through the list of jobs that suits you and your
                  schedule
                </p>
              </StepContent>
            </Step>
            <Step onClick={() => this.setState({ step: 1 })}>
              <StepLabel>Apply is just one click away</StepLabel>
              <StepContent>
                <p>You will receive comfirmation within the 24 hours.</p>
              </StepContent>
            </Step>
            <Step onClick={() => this.setState({ step: 2 })}>
              <StepLabel>
                Complete your job and submit feedback about your experience
              </StepLabel>
              <StepContent>
                <p>
                  Instant deduction to your debt and gain experience points in
                  your profile
                </p>
              </StepContent>
            </Step>
          </Stepper>
        </div>
        <div className="table_container">
          <div className="table_content">
            <SearchBar
              onChange={() => console.log("onChange")}
              onRequestSearch={() => console.log("onRequestSearch")}
              style={{
                margin: "0 auto",
                maxWidth: 400,
                marginTop: 60,
                marginBottom: 20
              }}
            />
          </div>
          <GridListExampleSimple CareJobs={JobList} />
          {/* <Table striped bordered condensed hover style= {{ marginTop: 20}}>
            <thead>
              <tr>
                <th>Case number</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody>{this.renderJobs()}</tbody>
          </Table> */}
        </div>
      </div>
    );
  }
}
