import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { getPeaksForMap } from '../../selectors';
import { toggleInfoWindow, closeInfoWindow } from './../../modules/peaks/actions';

export function PeakMap(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: getPeaksForMap(state),
  showInfoWindowID: state.app.peaks.showInfoWindowID,
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onToggleInfoWindow: (peakID) => {
      dispatch(toggleInfoWindow(peakID));
    },
    onCloseInfoWindow: () => {
      dispatch(closeInfoWindow());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeakMap);
