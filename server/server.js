"use strict";

/* eslint-env node, es6 */

const express = require("express");
const app = express();
const watson = require("watson-developer-cloud");
const vcapServices = require("vcap_services");
const cors = require("cors");
const fs = require("fs");
var TextToSpeechV1 = require("watson-developer-cloud/text-to-speech/v1");
const morgan = require("morgan");
const ToneAnalyzerV3 = require("watson-developer-cloud/tone-analyzer/v3");
const bodyParser = require("body-parser");
const apiaiApp = require("apiai")("fd5a123ef6d143d490c1301499a9ff19");
const request = require("request");
const toneAnalyzer = new ToneAnalyzerV3({
  username: "ec605baf-e3f7-46e7-9721-d33064ea36a9",
  password: "h8jwU1p7bMGo",
  version: "2016-05-19",
  url: "https://gateway.watsonplatform.net/tone-analyzer/api/"
});

const toneAnalyze = function(json, res) {
  console.log("Analyzing tone");

  var params = {
    tone_input: json,
    content_type: "application/json"
  };

  tone_analyzer.tone(params, function(error, response) {
    if (error) res.send(error);
    else res.send(JSON.stringify(response, null, 2));
  });
};

// on bluemix, enable rate-limiting and force https
if (process.env.VCAP_SERVICES) {
  // enable rate-limiting
  const RateLimit = require("express-rate-limit");
  app.enable("trust proxy"); // required to work properly behind Bluemix's reverse proxy

  const limiter = new RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0 // disable delaying - full speed until the max limit is reached
  });

  //  apply to /api/*
  app.use("/api/", limiter);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  // force https - microphone access requires https in Chrome and possibly other browsers
  // (*.mybluemix.net domains all have built-in https support)
  const secure = require("express-secure-only");
  app.use(secure());
}

app.use(express.static(__dirname + "/static"));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// token endpoints
// *Warning*: these endpoints should probably be guarded with additional authentication & authorization for production use

// speech to text token endpoint
var sttAuthService = new watson.AuthorizationV1(
  Object.assign(
    {
      username: "d8e95153-6292-4001-b964-09091260cdeb", // or hard-code credentials here
      password: "uqn344j6oJSt"
    },
    vcapServices.getCredentials("speech_to_text") // pulls credentials from environment in bluemix, otherwise returns {}
  )
);

var textToSpeech = new TextToSpeechV1({
  username: "05028bbd-db49-4418-81ca-d11ad0dccf09",
  password: "t1mKXLE6rTap",
  url: "https://stream.watsonplatform.net/text-to-speech/api"
});

app.use("/api/speech-to-text/token", function(req, res) {
  sttAuthService.getToken(
    {
      url: watson.SpeechToTextV1.URL
    },
    function(err, token) {
      if (err) {
        console.log("Error retrieving token: ", err);
        res.status(500).send("Error retrieving token");
        return;
      }
      res.send(token);
    }
  );
});
app.post("/api/text_to_speech", (req, res) => {
  return toneAnalyzer.tone(
    {
      tone_input: req.body.text,
      content_type: "text/plain",
                  accept: "audio/wav" // default is audio/ogg; codec=opus
    },
    function(err, tone) {
      if (tone.document_tone.tone_categories[0].tones[0].score > 0.6) {
        textToSpeech
          .synthesize({
            text: "You sound angry, would you like to talk to a real person?",
            voice: "en-US_AllisonVoice",// Optional voice
              accept: "audio/wav"
          })
          .pipe(fs.createWriteStream("output.wav"));
      } else {
        let apiai = apiaiApp.textRequest(req.body.text, {
          sessionId: "fgdgdg" // any arbitrary text
        });
        apiai.on("response", response => {
          let newText = response.result.fulfillment.speech;
          return textToSpeech
            .synthesize({
              text: newText,
              voice: "en-US_AllisonVoice", // Optional voice,
                          accept: "audio/wav" // default is audio/ogg; codec=opus
            })
            .pipe(fs.createWriteStream("output.wav"));
        });
        apiai.on("error", error => {
          console.log(error);
        });
        apiai.end();
      }
    }
  );
});

const port = process.env.PORT || process.env.VCAP_APP_PORT || 3002;
app.listen(port, function() {
  console.log(
    "Example IBM Watson Speech JS SDK client app & token server live at http://localhost:%s/",
    port
  );
});

// Chrome requires https to access the user's microphone unless it's a localhost url so
// this sets up a basic server on port 3001 using an included self-signed certificate
// note: this is not suitable for production use
// however bluemix automatically adds https support at https://<myapp>.mybluemix.net
if (!process.env.VCAP_SERVICES) {
  const https = require("https");
  const HTTPS_PORT = 3001;

  const options = {
    key: fs.readFileSync(__dirname + "/keys/localhost.pem"),
    cert: fs.readFileSync(__dirname + "/keys/localhost.cert")
  };
  https.createServer(options, app).listen(HTTPS_PORT, function() {
    console.log("Secure server live at https://localhost:%s/", HTTPS_PORT);
  });
}
