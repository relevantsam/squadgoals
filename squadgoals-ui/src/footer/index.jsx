import React from 'react';
import { connect } from 'react-redux';
import { fetchStatus } from '../actions';

const moment = require('moment');

const footer = ({status, getStatus}) => {
  getStatus();

  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
              PUBG API Version <strong>{status.version}</strong> released {moment(status.releasedAt).fromNow()}
          </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(footer);