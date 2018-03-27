import React from 'react';
import { connect } from 'react-redux';
import { fetchStatus } from '../actions';

import './style.css';

const moment = require('moment');

const Footer = ({status, getStatus}) => {
  if(status.version === null) getStatus();

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
        { status.version !== null ?
          <p>
              PUBG API Version <strong>{status.version}</strong> released {moment(status.releasedAt).fromNow()}
          </p> : <span>Loading..</span>
        }
        </div>
      </div>
    </footer>
  )
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);