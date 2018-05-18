import React, {Component} from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Signin from './signin/Signin';
import Signup from './signup/Signup';
import Jokes from './jokes/Jokes';
import {Home} from './home/Home.js';

class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Some jokes</h1>
      </header>
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/jokes" component={Jokes}/>
      <Route path="/signup" component={Signup}/>
    </div>);
  }
}

export default withRouter(App);
