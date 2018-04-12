import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Paper from "material-ui/Paper";
import RaisedButton from 'material-ui/RaisedButton';

const CardExampleExpandable = () => (
  <div style={{ display: "flex" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Card style={{ marginTop: 20, marginLeft: 20, width: 500 }}>
        <CardHeader
          title="Car Loan"
          subtitle="amount  200 euro, interest rate: 5%, due date: 2 months"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Pay" />
          <FlatButton label="Detail" />
        </CardActions>
        <CardText expandable={true}>You bought a car on 2007.</CardText>
      </Card>
      <Card style={{ marginTop: 20, marginLeft: 20, width: 500 }}>
        <CardHeader
          title="Phone Bill"
          subtitle="amount: 400 euro, interest rate: 5%, due date: 2 months"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Pay" />
          <FlatButton label="Detail" />
        </CardActions>
        <CardText expandable={true}>You bought a phone in 2008</CardText>
      </Card>
    </div>
    <div>
      <Paper style={style} zDepth={1}>
        <p style={{marginTop:20}}>Total amount: 600 euro</p>
        <div style={{marginLeft:30,display:'flex'}}>
        <RaisedButton  style={{marginRight:20}} label="Payment plan" />
        <FlatButton secondary={true} label="No money? No prob!" />
      </div>
      </Paper>
    </div>
  </div>
);
const style = {
  height: 300,
  width: 400,
  marginLeft: 100,
  marginTop:20,
  textAlign: "center",
  display: "inline-block"
};

export default CardExampleExpandable;
