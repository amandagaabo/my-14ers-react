import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { removePeak, updateSort } from './../../modules/peaks/actions';
import { getSortedPeaksForList } from './../../modules/peaks/selectors';

export function PeakList(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: getSortedPeaksForList(state),
  sortBy: state.app.peaks.sortBy,
  loggedIn: state.app.auth.authToken !== null,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePeak: (token, uuid, peakID) => {
      dispatch(removePeak(token, uuid, peakID));
    },
    onSortSelect: (sortBy) => {
      dispatch(updateSort(sortBy));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PeakList);
