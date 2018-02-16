import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { updateSort, setEditPeak } from './../../modules/peaks/actions';
import { getSortedPeaksForList } from './../../modules/peaks/selectors';

export function PeakList(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: getSortedPeaksForList(state),
  sortBy: state.app.peaks.sortBy,
  loggedIn: state.app.auth.currentUser !== null,
  authToken: state.app.auth.authToken,
  currentUser: state.app.auth.currentUser
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onSetEditPeak: (editPeak) => {
      dispatch(setEditPeak(editPeak));
    },
    onSortSelect: (sortBy) => {
      dispatch(updateSort(sortBy));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PeakList);
