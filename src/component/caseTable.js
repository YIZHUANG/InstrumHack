// import { thead, Table } from "react-bootstrap";
import React from "react";
const CastTable = ({ data }) => {
  return (
    <tr>
      <td>{data.description}</td>
      <td>{data.amount}</td>
      <td>{data.industry}</td>
    </tr>
  );
};

export default CastTable;
