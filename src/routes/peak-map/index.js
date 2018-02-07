import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';
import { getPeaksForMap } from './../../modules/peaks/selectors';
import { toggleInfoWindow, closeInfoWindow } from './../../modules/peaks/actions';

export function PeakMap(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: getPeaksForMap(state),
  showInfoWindowID: state.app.peaks.showInfoWindowID,
  mapCenter: state.app.peaks.mapCenter,
  loggedIn: state.app.auth.currentUser !== null
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onToggleInfoWindow: (peakID, lat, lng) => {
      dispatch(toggleInfoWindow(peakID, lat, lng));
    },
    onCloseInfoWindow: () => {
      dispatch(closeInfoWindow());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeakMap);
