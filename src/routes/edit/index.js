import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { updatePeak } from './../../modules/peaks/actions';


export function AddPeak(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.authToken !== null,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser,
  editPeak: state.app.peaks.editPeak
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePeak: (token, uuid, peakId, dateClimbed, notes) => {
      dispatch(updatePeak(token, uuid, peakId, dateClimbed, notes));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPeak);
