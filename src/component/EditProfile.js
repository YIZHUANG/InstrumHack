import React, { Component } from "react";
import {
 form,
 FormGroup,
 ControlLabel,
 FormControl,
 Button
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
// <Link to='/EditProfile' />

export default class EditProfile extends Component {
 notify = () => {
  toast.success("Profile updated", {
   position: toast.POSITION.TOP_CENTER
  });
 };

 render() {
  return (
   <div className="EditForm_container" style={{}}>
    <h1>Edit your profile</h1>
    <form>
     <FormGroup controlId="formBasicText">
      <ControlLabel>Address</ControlLabel>
      <FormControl type="text" placeholder="Enter address" />
     </FormGroup>
     <FormGroup controlId="formBaText">
      <ControlLabel>Phone number</ControlLabel>
      <FormControl type="text" placeholder="Enter phone number" />
     </FormGroup>
     <FormGroup controlId="">
      <ControlLabel>Select job type interests</ControlLabel>
      <FormControl componentClass="select" multiple>
       <option value="select">Full-tile</option>
       <option value="other">Part-time</option>
       <option value="other">Fix-term</option>
      </FormControl>
     </FormGroup>
     <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Select your interests</ControlLabel>
      <FormControl componentClass="select" multiple>
       <option value="select">Care</option>
       <option value="other">Home</option>
       <option value="other">OutDoor</option>
       <option value="other">IT</option>
      </FormControl>
     </FormGroup>
     <FormGroup controlId="formControlsTextarea">
      <ControlLabel>About yourself</ControlLabel>
      <FormControl componentClass="textarea" placeholder="About yourself" />
     </FormGroup>
     <FormGroup>
      <ControlLabel>Your email address</ControlLabel>
      <FormControl.Static>BrackObama@helloWorld.com</FormControl.Static>
     </FormGroup>
     <Button onClick={this.notify} type="submit">
      Save
     </Button>
    </form>
    <ToastContainer autoClose={1500} />
   </div>
  );
 }
}