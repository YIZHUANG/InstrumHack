import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
