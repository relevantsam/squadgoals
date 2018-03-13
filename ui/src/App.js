import React, { Component } from 'react';
import logo from './assets/images/pubg_logo.png';
import '../node_modules/bulma/css/bulma.css';
import './App.css';

import Onboarding from './onboarding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">#SQUADGOALS</h1>
        </header>
        <Onboarding />
      </div>
    );
  }
}

export default App;
