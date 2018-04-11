import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

class CallCenter extends Component {
  constructor() {
    super()
    this.state = {}
  }
  onListenClick() {

    fetch('http://localhost:3002/api/speech-to-text/token')
      .then(function(response) {
          return response.text();
      }).then((token) => {
        console.log('token is', token)
        var stream = recognizeMic({
            token: token,
            objectMode: true, // send objects instead of text
            extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.on('data', (data) => {
          this.setState({
            text: data.alternatives[0].transcript
          })
        });
        stream.on('error', function(err) {
            console.log(err);
        });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function(error) {
          console.log(error);
      });
  }
  render() {
    return (
      <div className="Container">
      <div className="main-header-line">
      <div className="container">
      <h1>Call Center</h1>
      <p>Speak to us about your inquiries</p>
      </div>
      </div>
      <div className="App">
        <RaisedButton style={{marginTop:50}} onClick={this.onListenClick.bind(this)} label="Click to speak" />
        <div style={{fontSize: '40px'}}>{this.state.text}</div>
      </div>
      </div>
    );
  }
}

export default CallCenter;
