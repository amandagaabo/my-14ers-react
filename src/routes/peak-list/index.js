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
  loggedIn: state.app.auth.authToken !== null
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePeak: (token, peakID) => {
      dispatch(removePeak(token, peakID));
    },
    onSortSelect: (sortBy) => {
      dispatch(updateSort(sortBy));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PeakList);
