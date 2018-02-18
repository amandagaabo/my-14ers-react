import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { updatePeak, removePeak } from './../../modules/peaks/actions';

export function EditPeak(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  loggedIn: state.app.auth.currentUser !== null,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser,
  editPeak: state.app.peaks.editPeak
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatePeak: (token, uuid, peakId, dateClimbed, notes) => {
      dispatch(updatePeak(token, uuid, peakId, dateClimbed, notes));
    },
    onDeletePeak: (token, uuid, peakId) => {
      dispatch(removePeak(token, uuid, peakId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPeak);
