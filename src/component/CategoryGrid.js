import React, { Component } from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import { categorys } from "../assets/jobCategory";
import Snackbar from "material-ui/Snackbar";
import JobList from "../assets/jobList";
import { Modal, Button } from "react-bootstrap";
import JobTable from "./jobTable";
import OutdoorList from "../assets/outDoorList";

// import CardExampleExpandable from "../component/casesCard";
// import * as images from '../assets/grid';
// import SkyLight from "react-skylight";
// import CareJobs from "./careJobs";
// import Paper from "material-ui/Paper";
// import Subheader from "material-ui/Subheader";
const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: "95%",
    // height: 450,
    overflowY: "auto"
  }
};
export default class GridListExampleSimple extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.state = {
      show: false,
      show2: false,
      open: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose2() {
    this.setState({ show2: false });
  }

  handleShow2() {
    this.setState({ show2: true });
  }

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  renderJobList() {
    return JobList.map((job, index) => (
      <JobTable onApply={this.handleClick} key={index} job={job} />
    ));
  }

  renderOutdorList() {
    return OutdoorList.map((job, index) => (
      <JobTable onApply={this.handleClick} key={index} job={job} />
    ));
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight={250}
          style={styles.gridList}
          cols="3"
           className="categoryDiv"
        >
          {/* <Subheader>Job Categories</Subheader> */}
          {categorys.map(tile => (
            <GridTile
              //insert function to show jobs by category
              key={tile.img}
              title={tile.title}
              //   subtitle={<span>by <b>{tile.author}</b></span>}
              onClick={
                tile.title === "Care" ? this.handleShow : this.handleShow2
              }
              actionIcon={
                <IconButton>
                  <StarBorder color="white" />
                </IconButton>
              }
            >
              <img src={require(`../assets/grid/${tile.img}`)} alt="local image" />
            </GridTile>
          ))}
        </GridList>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>available Job list</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderJobList()}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.show2} onHide={this.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>available Job list</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.renderOutdorList()}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose2}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Snackbar
          open={this.state.open}
          message="You have successfully applied for this job"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
