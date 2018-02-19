import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function AddPeak(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  allPeaks: state.app.peaks.allPeaks,
  loggedIn: state.app.auth.currentUser !== null,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser
});

export default connect(mapStateToProps)(AddPeak);
