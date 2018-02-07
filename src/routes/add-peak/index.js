import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import Layout from './components/layout';
import { addPeak } from './../../modules/peaks/actions';


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

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddPeak: (token, userId, peakName, dateClimbed, notes) => {
      dispatch(addPeak(token, userId, peakName, dateClimbed, notes));
      dispatch(reset('add-peak'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPeak);
