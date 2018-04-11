import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleExpandable = () => (
    <div>
    <Card style={{marginTop:20,marginLeft:20, width:300}}>
      <CardHeader
        title="Case 1"
        subtitle="Car Loan"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Pay" />
        <FlatButton label="More" />
      </CardActions>
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
     <Card style={{marginTop:20,marginLeft:20, width:300}}>
     <CardHeader
       title="Case 2"
       subtitle="Phone Bill"
       actAsExpander={true}
       showExpandableButton={true}
     />
     <CardActions>
       <FlatButton label="Pay" />
       <FlatButton label="More" />
     </CardActions>
     <CardText expandable={true}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
     </CardText>
   </Card>
   </div>
    
  );
  
  export default CardExampleExpandable;