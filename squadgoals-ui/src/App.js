import React, { Component } from 'react';
import logo from './assets/images/pubg_logo.png';
import './assets/vendor/css/bulma.css';
import './App.css';

import MatchList from './match-list';
import MatchSearch from './match-search';
import Footer from './footer';
import ShardSelector from './shard-selector';

export default class App extends Component {
  state = {
    searchActive: false
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
        <main>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="title">#SQUADGOALS</h1>
          </header>
          <section className="is-large constrained main-content">
            <ShardSelector />
            <MatchSearch searchActive={() => this.setState({searchActive: true})} />
            {this.state.searchActive ?
              <MatchList />
              :
              ""}
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}