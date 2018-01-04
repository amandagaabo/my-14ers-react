import React from 'react';
import { connect } from 'react-redux';
import Layout from './components/layout';

export function PeakMap(props) {
  return (
    <Layout {...props} />
  );
}

export const mapStateToProps = state => ({
  userPeaks: state.app.peaks.userPeaks,
});

export default connect(mapStateToProps)(PeakMap);
