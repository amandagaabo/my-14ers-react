import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function EditPeak(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser,
  editPeak: state.app.peaks.editPeak,
  loading: state.app.peaks.loading
});

export default connect(mapStateToProps)(EditPeak);
