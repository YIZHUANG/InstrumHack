import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
// import RaisedButton from "material-ui/RaisedButton";

const styles = {
  whiteSpace: "normal",
  wordWrap: "break-word"
};

const Tables = ({ jobs, key }) => {
  return (
    <Table key={key} className="table" style={{ width: "70%" }}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>description</TableHeaderColumn>
          <TableHeaderColumn>industry</TableHeaderColumn>
          <TableHeaderColumn>Localtion</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {jobs.map((job, index) => (
          <TableRow>
            {" "}
            <TableRowColumn className="api_col" style={styles}>
              {job.description}
            </TableRowColumn>
            <TableRowColumn style={styles}>{job.industry}</TableRowColumn>
            <TableRowColumn style={styles}>{job.address}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Tables;
