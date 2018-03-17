import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStatus } from './actions';
import logo from './assets/images/pubg_logo.png';
import './assets/vendor/css/bulma.css';
import './App.css';

import Onboarding from './onboarding';

class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    this.props.getStatus();
  }

  render = () => {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    if (this.props.hasErrored) {
      return <p>Error, could not retrieve API status</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">#SQUADGOALS</h1>
        </header>
        <Onboarding />
        <footer>
          Connected! API Version <em>{this.props.status.version}</em> released at: 
          {this.props.status.releasedAt}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.status,
    hasErrored: state.fetchStatusError,
    isLoading: state.statusIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getStatus: () => dispatch(fetchStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
