import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { removePeak } from './../../modules/peaks/actions';

export function PeakList(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: state.app.peaks.userPeaks,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePeak: (token, peakID) => {
      dispatch(removePeak(token, peakID));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PeakList);
