import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  CardHeader,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

const JobTable = ({ job,onApply }) => (
  <div>
    <Card style={{ marginTop: 20, marginLeft: 20, width: 500 }}>
      <CardHeader
        title={job.title}
        subtitle={`${job.salary} euro per hour in ${job.city}`}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton onClick={onApply} label="Easy apply" />
        <FlatButton label="Review" />
      </CardActions>
      <CardText expandable={true}>
        <CardTitle title="Job description" />
        {job.description}
        <CardTitle title="Job requirements" />
        {job.requirement}
        <CardTitle title="Contact person" />
        {job.contactPerson}
      </CardText>
    </Card>
  </div>
);

export default JobTable;
