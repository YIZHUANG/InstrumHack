import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class ProfileDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="My Jobs"
          onClick={this.handleToggle}
        />
        <Drawer width={350} openSecondary={false} open={this.state.open}  >
          <AppBar title="My Open Jobs"  onClick={this.handleToggle}/>
        </Drawer>
      </div>
    );
  }
}