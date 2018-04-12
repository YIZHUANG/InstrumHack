import React, { Component } from "react";
// import jobs from "../assets/jobs";
import Tables from "./table";
// import { HashRouter, Route, Router, Link } from "react-router-dom";
// import jobFields from "../assets/jobs";
import SearchBar from "material-ui-search-bar";
import JobList from "../assets/jobList";
// import { thead, Table } from "react-bootstrap";
import GridListExampleSimple from "../component/CategoryGrid";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import ProfileDrawer from './ProfileDrawer';

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
            <p>Brand new way to way
            to finance your debt</p>
          </div>
        </div>
        <div
          style={{ fontFamily: "Arial", textAlign: "center", marginTop: 50 }}
        >
          <p style={{ fontSize: 16 }}>
            <b style={{ fontSize: 18 }}>Discover</b>
            <br/>
            Discover various temporary positions based on
            your skills and preference. <br/>
            Take charge of <b>your</b> life and finances while learning new skills and gaining trust in yourself. <br />
          </p>
        </div>
        <div>
          <h1 style={{ fontFamily: "Arial", textAlign: "center" }}>
            How does it work?
          </h1>
          <h2 style={{ fontFamily: "Arial", textAlign: "center" }}>Level 1 : Each hour you commit to instantly becomes <b>20 &#8364; OFF</b> your debt </h2>
          <Stepper
             style={{ marginLeft: 500 }}
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
          <ProfileDrawer />
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
