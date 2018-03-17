import React, { Component } from 'react';
import logo from './assets/images/pubg_logo.png';
import './assets/vendor/css/bulma.css';
import './App.css';

import Footer from './footer';
import Onboarding from './onboarding';

export default class App extends Component {
  render = () => {
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    if (this.props.hasErrored) {
      return <p>Error, could not retrieve API status</p>;
    }
    return (
      <div className="App">
        <main>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="title">#SQUADGOALS</h1>
          </header>
          <section className="is-large">
            <Onboarding />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}