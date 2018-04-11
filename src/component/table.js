import React from "react";
// import { thead, Table } from "react-bootstrap";

const Tables = ({ job, key }) => {
  return (
    <tr>
      <td>{job.description}</td>
      <td>{job.address}</td>
      <td>{job.industry}</td>
    </tr>
  );
};

export default Tables;
