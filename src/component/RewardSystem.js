import React, { Component } from "react";
// import jobs from "../assets/jobs";
import Tables from "./table";
// import { HashRouter, Route, Router, Link } from "react-router-dom";
import jobFields from "../assets/jobs";
import SearchBar from "material-ui-search-bar";
import JobList from "../assets/jobList";
import { thead, Table } from "react-bootstrap";
import GridListExampleSimple from '../component/CategoryGrid'

export default class RewardSystem extends Component {
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
        <div style={{fontFamily: 'Arial', textAlign: 'center', marginTop: 50}}>
          <p style={{fontSize: 16}}><b style={{fontSize: 18}}>Rewards</b> are a brand new way to way to finance your debt. Discover various temporary positions based on your skills and preference.
         Take charge of your finance, <br/> learn new skills and gain trust. Choose from a variety of open and temporary Jobs to lower your debt amount. simply dummy text of the printing and typesetting
            industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
         <br/>
         <br/>
         <p style={{fontFamily: 'Arial', textAlign: 'center'}}><b>LOWER YOUR DEBT</b> We care about helping you lower your debt. Reduce your debt by working temporary positions while we take care of reducing your debt. Choose jobs based on various categories</p>
         <p style={{fontFamily: 'Arial', textAlign: 'center'}}><b>GAIN EXPERIENCE</b> Gain skills and Job experience as you take on various Job opportunities. Add skills to your profile to be accepted into more Job varieties</p>
         <p style={{fontFamily: 'Arial', textAlign: 'center'}}><b>LOWER YOUR DEBT</b> We care about helping you lower your debt. Reduce your debt by working temporary positions while we take care of reducing your debt. Choose jobs based on various categories</p>

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
          <GridListExampleSimple/>
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
