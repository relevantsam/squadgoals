import React, { Component } from 'react';
import logo from './assets/images/pubg_logo.png';
import './assets/vendor/css/bulma.css';
import './App.css';

import Onboarding from './onboarding';

class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/status');
    const body = await response.json();


    console.log(body);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
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
