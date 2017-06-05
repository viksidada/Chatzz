import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App.js';
import SignIn from './components/authentication/SignIn.js';
import SignUp from './components/authentication/SignUp';
import Home from './Home';

ReactDOM.render (


    <Router history = {browserHistory}>
    <Route path = "/" component={Home} />
    <Route path = "/signin" component = {SignIn} />
    <Route path = "/signup" component = {SignUp} />
    <Route path = "/app" component = {App} />
    </Router>, document.getElementById("root")
)