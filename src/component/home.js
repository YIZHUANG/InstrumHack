import React, { Component } from "react";
import { thead, Table } from "react-bootstrap";
import CastTable from "./caseTable";
import castList from "../assets/caseList";
// import GridListExampleSimple from '../component/CategoryGrid'
export default class Home extends Component {
  renderCaseList() {
    return castList.map((item, index) => <CastTable key={index} data={item} />);
  }

  render() {
    return (
      <div className="Container">
        <div className="main-header-line">
          <div className="container">
            <h1>Lower your debt today</h1>
            <p>We will help you</p>
          </div>
        </div>
        <div className="table_container">
          {/* <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Case number</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Due date</th>
              </tr>
            </thead>
            <tbody>{this.renderCaseList()}</tbody>
          </Table> */}
          {/* <GridListExampleSimple/> */}
        </div>
      </div>
    );
  }
}
