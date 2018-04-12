import React, { Component } from "react";
import SkyLight from "react-skylight";

export default class CareJobs extends Component {
//   constructor(props){
//   super(props);
// }
  render() {
    return (
      <div>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          title="Care jobs"
        >
          <form>
            <div className="form-group">
              <input
                placeholder="Brand"
                className="form-control"
                name="brand"
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Model"
                className="form-control"
                name="model"
              />
            </div>
            <div className="form-group">
              <input
                placeholder="color"
                className="form-control"
                name="color"
              />
            </div>
            <div className="form-group">
              <input placeholder="year" className="form-control" name="year" />
            </div>
            <div className="form-group">
              <input
                placeholder="price"
                className="form-control"
                name="price"
              />
            </div>
            <div className="form-group">
              <input placeholder="fuel" className="form-control" name="fuel" />
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
        </SkyLight>
        <button style={{ marginLeft: 30 }} className="btn btn-primary">
          Add car
        </button>
      </div>
    );
  }
}
