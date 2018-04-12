import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import CareJobs from "./careJobs";
import recognizeMic from "watson-speech/speech-to-text/recognize-microphone";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";

class CallCenter extends Component {
 constructor() {
  super();
  this.state = {};
  this.onSend = this.onSend.bind(this);
 }
 onListenClick() {
  const self = this;
  fetch("http://localhost:3002/api/speech-to-text/token")
   .then(function(response) {
    return response.text();
   })
   .then(token => {
    var stream = recognizeMic({
     token: token,
     objectMode: true, // send objects instead of text
     extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
     format: false // optional - performs basic formatting on the results such as capitals an periods
    });
    stream.on("data", data => {
     this.setState({
      text: data.alternatives[0].transcript
     });
    });
    stream.on("error", function(err) {
     console.log(err);
    });
    document.querySelector("#stop").onclick = () => {
     stream.stop.bind(stream);
     self.onSend;
    };
   })
   .catch(function(error) {
    console.log(error);
   });
 }

 onSend() {
  const audio = document.getElementById("audio");
  audio.setAttribute("src", "");

  return axios
   .post("http://localhost:3002/api/text_to_speech", {
    text: this.state.text
   })
   .then(response => {
    response.blob().then(blob => {
     const url = window.URL.createObjectURL(blob);
     this.setState({ loading: false, hasAudio: true });
     audio.setAttribute("src", url);
     audio.setAttribute("type", "audio/ogg;codecs=opus");
    });
   });
 }

 render() {
  console.log("text is", this.state.text);
  return (
   <div className="Container">
    <div className="main-header-line">
     <div className="container">
      <h1>Call Center</h1>
      <p>Speak to us about your inquiries</p>
      <audio id="audio" autoPlay="true" />
     </div>
    </div>
    <div className="App">
     <RaisedButton
      style={{ marginTop: 50 }}
      onClick={this.onListenClick.bind(this)}
      label="Click to speak"
     />
     <RaisedButton id="stop" style={{ marginTop: 50 }} label="Send" />
     <div style={{ fontSize: "40px" }}>{this.state.text}</div>
    </div>
    <CareJobs />
   </div>
  );
 }
}

export default CallCenter;